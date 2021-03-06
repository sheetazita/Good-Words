class VersesController < ApplicationController
  before_action :set_verse, only: [:show, :update, :destroy]

  before_action :authorize_request, except: [:create, :index, :show, :random]  

  # # /verses/:verse_id/verses
  #   def index
  #   @topic = Topic.find(params[:topic_id])
  #     verses = @topic.verses
  #   render json: verses, status: :ok
  # end

  # # GET /verses/1
  # def show
  #   render json: @verse
  # end

  def random
    @random = rand(Verse.all.length)
    @verse = Verse.find(rand(1..Verse.all.length))
   
    render json: @verse, include: :topic, status: :ok
  end

  # private
  #   # Use callbacks to share common setup or constraints between actions.
  #   def set_verse
  #     @verse = Verse.find(params[:id])
  #   end

end
