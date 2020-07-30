class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :card_name
      t.string :image_src
      t.string :description
      t.string :note

      t.timestamps
    end
  end
end
