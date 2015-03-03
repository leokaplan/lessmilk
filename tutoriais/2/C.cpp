#include "SDL2/SDL.h"

int main( int argc, char* args[] )
{
	SDL_Window* window = NULL;
	

	SDL_Init( SDL_INIT_VIDEO ); 
    window = SDL_CreateWindow("My window name", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, 640, 800, SDL_WINDOW_SHOWN);
    if( window == NULL )
    {
        return 0;
    }
    
    SDL_Rect quad;
    SDL_Color color;

    SDL_RenderCopy(ren, tex, NULL, &dst);
    while(true){
        SDL_RenderPresent(_REN);
    }

	SDL_DestroyWindow( window );

	SDL_Quit();

	return 0;
}

