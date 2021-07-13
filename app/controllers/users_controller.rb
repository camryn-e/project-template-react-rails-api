class UsersController < ApplicationController

    def create # signup
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show # me
        return render json: { error: "You Are Not Logged In" }, status: :unauthorized unless session.include? :user_id
        user = User.find(session[:user_id])
        render json: user, include: :scorecards
    end

    def update # change home alley
        user = User.find(session[:user_id])
        user.update(home_alley: params[:home_alley])
        render json: user
    end

    def destroy # delete account
        user = User.find(session[:user_id])
        user.destroy
        session.delete :user_id
        # byebug
        # head :no_content
        render json: user
    end

    private

    def user_params
        params.permit(:username, :name, :password, :password_confirmation, :home_alley)
    end

end
