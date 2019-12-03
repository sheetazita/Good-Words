class AddTopicToVerses < ActiveRecord::Migration[6.0]
  def change
    add_reference :verses, :topic, null: false, foreign_key: true
  end
end
