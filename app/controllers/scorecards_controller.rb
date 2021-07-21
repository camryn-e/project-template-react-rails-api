class ScorecardsController < ApplicationController
    before_action :authorize

    def create
        user = User.find(session[:user_id])
        score_card = user.scorecards.create(score_card_params)
        render json: score_card
    end

    def index
        user = User.find(session[:user_id])
        score_cards = user.scorecards
        render json: score_cards
    end

    def show
        user = User.find(session[:user_id])
        score_card = user.scorecards.find(params[:id])
        render json: score_card
    end

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def score_card_params
        params.permit(:id, :tournament_name, :round_1, :round_2, :round_3, :round_4, :round_5, :round_6, :round_7, :round_8, :round_9, :round_10, :user_id)
    end


end
