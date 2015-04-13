
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

    SDL_Color red;
        red.r = 0xFF;
        red.g = 0x00;
        red.b = 0x00;

    SDL_Color blue;
        blue.r = 0x00;
        blue.g = 0x00;
        blue.b = 0xFF;

    SDL_Event e;

	bool quit = false;
    bool color = true;
    Uint32 dt = 0;
    //While application is running
    Uint32 start = SDL_GetTicks();
    int timer = 0;
    float speed = 0;
    while( !quit )
    {
        dt = SDL_GetTicks() - start;
        //Handle events on queue
        while( SDL_PollEvent( &e ) != 0 )
        {
            //User requests quit
            if( e.type == SDL_QUIT )
            {
                quit = true;
            }
            if( e.type == SDL_KEYDOWN ){
                if(event.key.keysym.sym == SDLK_d){
                    speed = 0.5;
                }
            }
            if( e.type == SDL_KEYUP ){
                if(event.key.keysym.sym == SDLK_d){
                    speed = 0;
                }
            }
        } 
        }
        if( timer >= 1000 )
        {
            if(color)
            {
                SDL_SetRenderDrawColor(ren, red.r,red.g,red.b,0xFF);
            }
            else
            {
                SDL_SetRenderDrawColor(ren, blue.r,blue.g,blue.b,0xFF);
            }
            color = !color;
            timer = 0;    
        }
        
        SDL_Color oldcolor;
        SDL_GetRenderDrawColor(ren,&oldcolor.r,&oldcolor.g,&oldcolor.b,&oldcolor.a);
        
        SDL_SetRenderDrawColor(ren, 0,0,0,0xFF);
        SDL_RenderFillRect(ren, NULL);
        
        SDL_SetRenderDrawColor(ren,oldcolor.r,oldcolor.g,oldcolor.b,oldcolor.a);
        
        SDL_RenderFillRect(ren, &quad);
        
        SDL_RenderPresent(ren);
        
        quad.x += speed*dt;
        start += dt;
        timer += dt;
    }
    SDL_DestroyRenderer(ren);
    SDL_DestroyWindow( window );

    SDL_Quit();

    return 0;

}
