#include "SDL2/SDL.h"

int main( int argc, char* args[] )
{
	SDL_Window* window = NULL;
	

	SDL_Init( SDL_INIT_VIDEO ); 
    win = SDL_CreateWindow("My window name", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, 640, 800, SDL_WINDOW_SHOWN);
    if( win == NULL )
    {
        return 0;
    }
    ren = SDL_CreateRenderer(win, -1, 0);
    if( ren == NULL )
    {
        return 0;
    }
    SDL_Rect quad;
        quad.x = 100;
		quad.y = 100;
    	quad.w = 50;
    	quad.h = 50;
    SDL_Color color;
        color.r = 0xFF;
    	color.g = 0x00;
    	color.b = 0x00;
    	
    SDL_SetRenderDrawColor(ren, color.r,color.g,color.b,0xFF);
	SDL_RenderFillRect(ren, &quad);
    while(true){
        SDL_RenderPresent(ren);
    }
	SDL_DestroyRenderer(ren);
	
	SDL_DestroyWindow( win );

	SDL_Quit();
	
	return 0;
}

