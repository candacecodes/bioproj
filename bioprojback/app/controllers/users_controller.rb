class UsersController < ApplicationController
    def index 
        @users = User.all 
        render json: @users  
    end 

    def show 
        @user = User.find_by_id(params[:id])
        render json: @user  
    end 

    def create
        @user = User.create(card_params)
        if @user.save
            render json: @user
        else
            render json: {errors:@user.full_message}, status:400
        end 
    end 

    def destroy 
        user = User.find(params[:id])
        user.destroy 
        render json: {status: 'SUCCESS', message: 'User deleted', data:user}
    end 

    def update 
        user = User.find(param[:id])
        if user.update_attributes(user_params)
            render json: @user 
        else 
            render json: {errors:@user.full_message}, status:400
        end 

    end 

    private 

    def user_params 
        params.permit(:username)
    end 
end
