import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import copy from 'clipboard-copy';
import * as React from 'react';

interface ChildProps {
  copy: (content: any) => void;
}

interface Props {
  TooltipProps?: Partial<TooltipProps>;
  children: (props: ChildProps) => React.ReactElement<any>;
}

interface OwnState {
  showTooltip: boolean;
}

/**
 * Render prop component that wraps element in a Tooltip that shows "Copied to clipboard!" when the
 * copy function is invoked
 */
class CopyToClipboard extends React.Component<Props, OwnState> {
  public state: OwnState = { showTooltip: false };

  public render() {
    return (
      <Tooltip
        open={this.state.showTooltip}
        title={'Copied contract address'}
        leaveDelay={500}
        onClose={this.handleOnTooltipClose}
        {...(this.props.TooltipProps ?? {})}
      >
        {this.props.children({ copy: this.onCopy })}
      </Tooltip>
    );
  }

  private readonly onCopy = (content: any) => {
    copy(content);
    this.setState({ showTooltip: true });
  };

  private readonly handleOnTooltipClose = () => {
    this.setState({ showTooltip: false });
  };
}

export default CopyToClipboard;
