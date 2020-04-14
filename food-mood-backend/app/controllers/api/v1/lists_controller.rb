class Api::V1::ListsController < ApplicationController
  
  def index 
    @lists = List.all
    render json: @lists.to_json(include: [:restaurants, :user])
  end 

  def create 
    byebug
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
