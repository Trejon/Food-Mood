class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy]

  #
  # GET /users
  def index
    @users = User.all
    render json: UserSerializer.new(@users)
  end

  # GET /users/1
  def show
    @user = User.find_by(id: params[:user_id])
    render json: UserSerializer.new(@user).serialized_json
  end

  # POST /users
  def create
    @user = User.create(user_params)
    if @user.save
      session[:user_id] = @user.id
      render json: UserSerializer.new(@user), status: :created
    else
      resp = { error: @user.errors.full_messages.to_sentence }
      render json: resp, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def user_params
    params
      .require(:user)
      .permit(:name, :email)
      .merge(password: params[:password])
  end
end
