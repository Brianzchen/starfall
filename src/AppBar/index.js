// @flow
import * as React from 'react';

import Box, { type BoxT } from '../Box';
import styler from '../styler';
import useGlobalStyles from '../useGlobalStyles';
import useTheme from '../useTheme';

type Props = {
  ...BoxT,
  children: React.Node,
  ...
};

/**
 * A layout component rendering a header at the top of the page.
 * You should aim to place this at the top of your page layout to avoid
 * unexpected behaviors though this component will render if there regardless.
 */
const AppBar: React$AbstractComponent<Props, HTMLElement> = React.forwardRef<Props, HTMLElement>(({
  children = null,
  style = {},
  ...otherProps
}: Props, ref) => {
  const theme = useTheme();

  const height = 50 * theme.scale;

  useGlobalStyles({
    body: {
      marginTop: height,
    },
  });

  const styles = {
    container: styler(style, theme, {
      position: 'fixed',
      top: 0,
      left: 0,
      height,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      color: theme.colors.monoInverse(),
      padding: theme.spacing(2),
      backgroundColor: theme.colors.primary(),
    }),
  };

  return (
    <Box
      {...otherProps}
      ref={ref}
      style={styles.container}
    >
      {children}
    </Box>
  );
});

export default AppBar;
