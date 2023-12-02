import { sourceLanguageTag } from './paraglide/runtime';

export const handle = ({ event, resolve }) => {

    if (!event.params.lang) {
        return resolve(event, {
            // @ts-ignore
            transformPageChunk: ({ html }) => html.replace('%lang%', `${sourceLanguageTag}`).replace('%dir%', (new Intl.Locale(sourceLanguageTag)).textInfo.direction)
        })
    } else {
        return resolve(event, {
            // @ts-ignore
            transformPageChunk: ({ html }) => html.replace('%lang%', `${event.params.lang}`).replace('%dir%', (new Intl.Locale(event.params.lang)).textInfo.direction)
        })
    }
}