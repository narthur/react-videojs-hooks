# react-videojs-hooks

## Example Usage

```tsx
import {VideoJsProvider, Video, usePaused} from 'react-videojs-hooks';

function App() {
  return (
    <>
      <VideoJsProvider videoJsOptions={{}}>
        <CustomVideo/>
      </VideoJsProvider>
      <Miniplayer/>
    </>
  )
};

function CustomVideo() {
  const [paused, setPaused] = usePaused();

  return (
    <>
      <Video autoplay={true}/>
      <button onClick={() => setPaused(!paused)}>
        {paused ? 'Play' : 'Pause'}
      </button>
    </>
  )
}

function Miniplayer() {
  const [paused, setPaused] = usePaused({
    global: true,
  });

  return (
    <>
      <Video fallback={true}/>
      <button onClick={() => setPaused(!paused)}>
        {paused ? 'Play' : 'Pause'}
      </button>
    </>
  )
}
```

## Roadmap

| Feature            | Status      |
|--------------------|-------------|
| VideoJsProvider    | Not Started |
| Video              | Not Started |
| usePaused          | Not Started |
| useTime            | Not Started |
| useVolume          | Not Started |
| useFullscreen      | Not Started |
| usePlaybackRate    | Not Started |
| usePlaybackQuality | Not Started |
