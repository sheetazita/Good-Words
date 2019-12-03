class TopicsController < ApplicationController
  before_action :set_topic, only: [:show, :update, :destroy]

  before_action :authorize_request, except: [:create, :index, :show]  

  # /topics/:topic_id/topics
    def index
    @topics = Topic.all
    render json: @topics, include: [:verses, :gifts], status: :ok
  end

  # GET /topics/1
  def show
    render json: @topic, include: [:verses, :gifts]
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_topic
      @topic = Topic.find(params[:id])
    end

end
