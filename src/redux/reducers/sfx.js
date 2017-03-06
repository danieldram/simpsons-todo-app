import {createStore} from 'redux'
import deepFreeze from 'deep-freeze'
import Wavesurfer from 'wavesurfer.js'

const wavesurfer = Wavesurfer.create({container:'#wavesurfer'})
wavesurfer.on('ready', ()=>{
  wavesurfer.play()
})

import * as ACT from '../action-types'


/* SET INITIAL STATE OF USER TODOS */

const sfx = (state, {type}) => {


  deepFreeze(state)

  switch(type){
    case ACT.SFX_DOH:
      wavesurfer.empty()
      wavesurfer.setVolume(1)
      wavesurfer.load(doh)
      return state
    case ACT.SFX_WOHOO:
      wavesurfer.empty()
      wavesurfer.setVolume(1)
      wavesurfer.load(wohoo)
      return state

    case ACT.SFX_OPENING:
      wavesurfer.empty()
      wavesurfer.setVolume(.4)
      wavesurfer.load(opening)
      return state
    default: return state
  }


}


export const SfxStore = createStore(sfx)
