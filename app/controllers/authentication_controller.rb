class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    @user = User.find_by_username(params[:username])
    if @user.authenticate(params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      token = encode(user_id: @user.id, username: @user.username)
      render json: { user: @user, token: token }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end
  
  # GET /auth/verify
  def verify
    # @current_user = res.locals.user
    render json: @current_user, status: :ok
  end


  private

  def login_params
    params.permit(:username, :password)
  end
end

# userRouter.get('/verify', restrict, (req, res) => {
#   const user = res.locals.user;
#   res.json(user);
# })