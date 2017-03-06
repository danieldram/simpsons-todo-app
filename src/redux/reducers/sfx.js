import {createStore} from 'redux'
import deepFreeze from 'deep-freeze'
import * as ACT from '../action-types'
import Wavesurfer from 'wavesurfer.js'

const wavesurfer = Wavesurfer.create({container:'#wavesurfer'})
wavesurfer.on('ready', ()=>{
  wavesurfer.play()
})


import doh from '../../audio/doh-1.wav'
import wohoo from '../../audio/wohoo-1.wav'
import opening from '../../audio/opening.mp3'



/* SET INITIAL STATE OF USER TODOS */
const InitialState = []

const sfx = (state=InitialState, {type}) => {


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

    default:
    return state
  }


}


export const SfxStore = createStore(sfx)
