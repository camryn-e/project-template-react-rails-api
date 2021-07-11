class UsersController < ApplicationController

    def create #signup
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show #me
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        user = User.find(session[:user_id])
        render json: user
    end

    # def update #change team
    #     user = User.find(session[:user_id])
    #     user_team = 
    # end

    private

    def user_params
        params.permit(:id, :username, :name)
    end

end
