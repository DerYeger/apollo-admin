import VueI18n from 'vue-i18n'
import { isDefined } from '~/model/index'

export type Rule = (v: string) => boolean | VueI18n.TranslateResult

export function requiredRule(i18n: VueI18n): Rule {
  return (v?: string) =>
    (isDefined(v) && v.length > 0) || i18n.t('validations.required')
}

export function maxLengthRule(i18n: VueI18n, maxLength: number): Rule {
  return (v: string | null | undefined) =>
    (isDefined(v) && v.length <= maxLength) ||
    i18n.t('validations.too-long', [maxLength])
}

export function textRules(i18n: VueI18n, maxLength: number): Rule[] {
  return [requiredRule(i18n), maxLengthRule(i18n, maxLength)]
}
