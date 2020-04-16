class SessionsController < Devise::SessionsController
  respond_to :json
  before_action :authenticate_user!

    def create 
      @user = User.find_by(email: params[:session][:email])
        if @user
          session[:user_id] = @user.id
          render json: @user
        else
          render json: {
            error: "Invalid Credentials"
          }
        end
    end 

    def get_current_user
      if 
    end 

    private

    def respond_with(resource, _opts = {})
      render json: resource
    end

    def respond_to_on_destroy
      head :no_content
    end

end
