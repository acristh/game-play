import { StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: '100%',
        height: 360,
    },

    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },

    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        lineHeight: 40,
        fontSize: 36,
        fontFamily: theme.fonts.title700,
        marginBottom: 16,
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        fontFamily: theme.fonts.title500,
        textAlign: 'center',
        lineHeight: 25,
        marginBottom: 32,
    }
});
