class CardsController < ApplicationController
    def index 
        @cards = Card.all 
        render json: @cards 
    end 

    def show 
        @card = Card.find_by_id(params[:id])
        render json: @card 
    end 

    def create
        @card = Card.create(card_params)
        if @card.save
            @deckcard = DeckCard.create(deckcard_params)
            render json: @card
        else
            render json: {errors:@card.full_message}, status:400
        end


    end 

    def destroy 
        card = Card.find(params[:id])
        card.destroy 
        render json: {status: 'SUCCESS', message: 'Card deleted', data:card}
    end 

    def update 
        card = Card.find(param[:id])
        if card.update_attributes(card_params)
            render json: @card 
        else 
            render json: {errors:@card.full_message}, status:400
        end 

    end 

    private 

    def card_params 
        params.require(:card).permit(:card_name, :image_src, :description, :note, :deck_ids => [])

    end 

    def deckcard_params 
        params.permit(:card_id, :deck_id)
    end 


    
end
