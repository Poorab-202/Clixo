
import { GlobalThemeOverrides } from 'naive-ui'

export const themeOverrides: GlobalThemeOverrides = {
    common: {
        primaryColor: '#6F00FF',
        primaryColorHover: '#3B0270',
        primaryColorPressed: '#E9B3FB',
        primaryColorSuppl: '#FFF1F1',
        fontFamily: "'Inter', sans-serif"
    },
    Button: {
        borderRadius: '12px',
        heightMedium: '44px',
        fontWeight: '600'
    },
    Card: {
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
    }
}
