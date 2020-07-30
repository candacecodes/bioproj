class DeckCard < ApplicationRecord
    belongs_to :deck 
    belongs_to :card 

    # accepts_nested_attributes_for :card
end
