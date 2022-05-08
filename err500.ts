import renderDOM from './src/utils/dom'
import Error from './src/components/error'

const err404Page = new Error({
 errorCode: '500',
 errorTitle: 'Looks like some cats have been here...',
 errorAdvise: 'We are alredy fixing it!',
})

renderDOM('.root', err404Page, 'container')
