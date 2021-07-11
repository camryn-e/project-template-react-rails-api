class SessionsController < ApplicationController
    
    def create #login
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password]) && user.valid?
            session[:user_id] = user.id
            render json: user
        # elsif !user&.authenticate(params[:password])
        #     render json: { error: "No Auth" }, status: :unauthorized
        # else
        #     render json: { errors: user.errors[:username] }, status: :unauthorized
        end
    end

    def destroy #logout
        return render json: { error: "Not Logged In" }, status: :unauthorized unless session.include? :user_id
        session.delete :user_id
        head :no_content
    end
end
