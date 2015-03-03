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

    //Wait two seconds
    SDL_Delay( 2000 );

	SDL_DestroyWindow( window );

	SDL_Quit();

	return 0;
}

