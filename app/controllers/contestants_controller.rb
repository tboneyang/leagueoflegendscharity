class ContestantsController < ApplicationController
	def create
		@tournament = Tournament.find(params[:tournament_id])
		@contestant = @tournament.contestants.create(contestant_params)
		redirect_to tournament_path(@tournament)
	end
end
