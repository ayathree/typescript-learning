//oop - abstraction

// implementation class by interface
interface MediaPlayer{
    play():void;
    pause():void;
    stop():void;
}

//implementation
class MusicPlayer implements MediaPlayer{
   play(){
    console.log('Playing music....')
   }
   pause(){
    console.log('Music paused...');
   }
   stop(){
    console.log('Music stoped...')
   }
}
//instance
const PoojaPlayer = new MusicPlayer()
PoojaPlayer.play()

//implementation class by abstructor


abstract class MediaPlayerA{
    abstract playA():void;
    abstract pauseA():void;
    abstract stopA():void;
}

class PoojaPlayerA extends MediaPlayerA{
    playA(){
        console.log('Playing music...')
    }
    pauseA() {
        console.log('Music paused...')
    }
    stopA(){
        console.log('Music stoped...')
    }
}

//instance
const player1 = new PoojaPlayerA()
player1.playA()

