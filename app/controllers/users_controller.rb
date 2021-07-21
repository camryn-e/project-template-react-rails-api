class UsersController < ApplicationController
    before_action :find_user, except: [:create]
    # skip_before_action only: [:create]

    def create # signup
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user
        else
            render json: { error: user.errors.full_messages.to_sentence }, status: :unprocessable_entity
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
        render json: user
    end

    def most_scorecards
        user_id = User.most_scorecards.first
        user = User.find_by(id: user_id)
        render json: user
    end

    private

    def user_params
        params.permit(:username, :name, :password, :password_confirmation, :home_alley)
    end

    def find_user
        user = User.find(session[:user_id])
    end

end