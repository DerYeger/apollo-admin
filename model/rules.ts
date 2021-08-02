import VueI18n from 'vue-i18n'

export type Rule = (v: string) => boolean | VueI18n.TranslateResult

export function textRules(i18n: VueI18n, maxLength: number): Rule[] {
  return [
    (v: string) => v.length > 0 || i18n.t('validations.required'),
    (v: string) => v.length <= maxLength || i18n.t('validations.too-long', [maxLength]),
  ]
}
