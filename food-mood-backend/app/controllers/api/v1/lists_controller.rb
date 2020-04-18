class Api::V1::ListsController < ApplicationController
  before_action :set_list, only: [:show, :update, :destroy]
  def index 
    if logged_in?
      @lists = current_user.lists 
      render json: ListSerializer.new(@lists)
    else 
      render json: {
        error: "You must be logged in to see lists."
      }
    end 
  end 

  def create 
    @list = current_user.lists.build(list_params)
    if @list.save
      render json: ListSerializer.new(@list)
    else
      error_resp = {
        error: @list.errors.full_messages.to_sentence
      }
      render json: { error: @list.errors, status: :unprocessable_entity }
    end 
  end 


  def show 
    render json: ListSerializer.new(@list)
  end 

  def update
    if @list.update(list_params)
      render json:  ListSerializer.new(@list), status: :ok
    else
      error_resp = {
        error: @list.errors.full_messages.to_sentence
      }
      render json: error_resp, status: :unprocessable_entity
    end
  end

  def destroy 
    @list.destroy
  end 

  private 

  def set_list 
    @list = List.find(params[:id])
  end 
  
  def list_params 
    params.require(:list).permit(:name, :description)
  end 

end
