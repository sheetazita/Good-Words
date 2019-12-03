class CreateVerses < ActiveRecord::Migration[6.0]
  def change
    create_table :verses do |t|
      t.string :quote
      t.string :location

      t.timestamps
    end
  end
end
