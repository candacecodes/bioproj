class DecksController < ApplicationController
    def index 
        @decks = Deck.all 
        render json: @decks 
    end 

    def show 
        @deck = Deck.find_by_id(params[:id])
        render json: @deck 
    end 

    def create
        @deck = Deck.create(deck_params)
        if @deck.save
            render json: @deck
        else
            render json: {errors:@deck.full_message}, status:400
        end 
    end 

    def destroy 
        deck = Deck.find(params[:id])
        deck.destroy 
        render json: {status: 'SUCCESS', message: 'Deck deleted', data:deck}
    end 

    def update 
        deck = Deck.find(param[:id])
        if deck.update_attributes(deck_params)
            render json: @deck 
        else 
            render json: {errors:@card.full_message}, status:400
        end 

    end 

    private 

    def deck_params 
        params.permit(:deck_name, :user_id)
    end 

end
