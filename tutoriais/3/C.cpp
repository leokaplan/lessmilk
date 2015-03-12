
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
    SDL_Renderer* ren;
    ren = SDL_CreateRenderer(window, -1, 0);
    
    SDL_Rect quad;
        quad.x = 100;
        quad.y = 100;
        quad.w = 50;
        quad.h = 50;

    SDL_Color color;
        color.r = 0xFF;
        color.g = 0x00;
        color.b = 0x00;

    SDL_Event e;

	bool quit = false;
    SDL_SetRenderDrawColor(ren, color.r,color.g,color.b,0xFF);
    SDL_RenderFillRect(ren, &quad);
    //While application is running
    while( !quit )
    {
        //Handle events on queue
        while( SDL_PollEvent( &e ) != 0 )
        {
            //User requests quit
            if( e.type == SDL_QUIT )
            {
                quit = true;
            }
            SDL_RenderPresent(ren);
        }
    }
    SDL_DestroyRenderer(ren);
    SDL_DestroyWindow( window );

    SDL_Quit();

    return 0;
    
}

