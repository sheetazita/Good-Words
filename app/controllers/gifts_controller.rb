class GiftsController < ApplicationController
  before_action :set_gift, only: [:show, :update, :destroy]

  before_action :authorize_request, except: [:create, :index, :show]  

  # /topics/:topic_id/gifts
    def index
    @topic = Topic.find(params[:topic_id])
    @gifts = @topic.gifts
    render json: @gifts, include: :topic, status: :ok
  end

  # GET /gifts/1
  def show
    render json: @gift
  end

  # POST /gifts
  def create
    @topic = Topic.find(params[:topic_id])
    @gift = @topic.gifts.new(gift_params)
    if @gift.save
      render json: {gift: @gift}, status: :created
    else
      render json: @gift.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /gifts/1
  def update
    @topic = Topic.find(params[:topic_id])
    @gift = Gift.find(params[:id])
    if @gift.update(gift_params)
      render json: @gift
    else
      render json: @gift.errors, status: :unprocessable_entity
    end
  end

  # DELETE /gifts/1
  def destroy
    @gift.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gift
      @gift = Gift.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def gift_params
      params.require(:gift).permit(:name, :image, :price, :product_link, :user_id)
    end
end
