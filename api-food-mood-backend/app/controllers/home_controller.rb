class HomeController < ApplicationController

    def index
      render json: { msg: 'Welcome Home!' }
    end

end
