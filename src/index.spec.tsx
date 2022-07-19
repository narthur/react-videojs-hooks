import {
  VideoJsProvider,
  Video
} from './index'
import {render} from "@testing-library/react";

describe('library', () => {
  it('works', () => {
    render(<VideoJsProvider><Video /></VideoJsProvider>)
    
    expect(true).toBe(true);
  })
})
