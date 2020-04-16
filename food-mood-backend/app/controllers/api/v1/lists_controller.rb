class Api::V1::ListsController < ApplicationController
  
  def index 
    if logged_in?
      @lists = current_user.lists 
      render json: @lists.to_json(include: [:restaurants, :user])
    else 
      render json: {
        error: "You must be logged in to see lists."
      }
    end 
  end 

  def create 
    @list = List.new(list_params)
    if @list.save
      render json: @list
    else
      render json: { error: 'Error creating new list' }
    end 
  end 


  def show 
    @list = List.find(params[:id])
    render json: @list.to_json(include: [:restaurants, :user])
  end 

  def destroy 
    @list = List.find(params[:id])
    @list.destroy
  end 

  private 
  
  def list_params 
    params.require(:list).permit(:name, :user_id)
  end 

end
