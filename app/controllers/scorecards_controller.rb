class ScorecardsController < ApplicationController
    before_action :authorize

    def create
        # byebug
        user = User.find(session[:user_id])
        score_card = user.scorecards.create(score_card_params)
        # score_card.user_id = session[:user_id]
        render json: score_card
    end

    def index
        # byebug
        user = User.find(session[:user_id])
        score_cards = user.scorecards
        render json: score_cards
    end

    # def destroy
    #     user = User.find(session[:user_id])
    #     score_card = user.scorecards.find(params[:id])
    #     user.scorecards.delete(score_card)
    #     head :no_content
    # end

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def score_card_params
        params.permit(:id, :tournament_name, :round_1, :round_2, :round_3, :round_4, :round_5, :round_6, :round_7, :round_8, :round_9, :round_10, :user_id)
    end


end
