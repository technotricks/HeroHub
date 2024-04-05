import {ItemClickCallback, LoadMoreCallback} from '@/types/base';
import {Character} from '@/types/character';

export namespace ILoadMore {
  export type Props = {
    items: Character[];
    isLoading: Boolean;
    onPress: ItemClickCallback;
    handleLoadMore: LoadMoreCallback;
  };
}
