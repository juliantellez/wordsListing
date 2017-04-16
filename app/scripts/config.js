import I from 'immutable'
import appConfig from '../../appConfig'

export default I.Record({
  ...appConfig,
})()
