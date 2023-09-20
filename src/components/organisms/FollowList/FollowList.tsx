import Avatar from '@/components/atoms/Avatar'
import FollowToggleButton from '@/components/atoms/FollowToggleButton'
import { Text } from '@/components/atoms/Text'
import useFollow from '@/hooks/useFollow'
import { useGetUserDetail } from '@/queries/users/detail'
import User from '@/types/user'
import './index.scss'

type FollowListProps = {
  isFollowerList: boolean
  userData: User
}

export default function FollowList({
  isFollowerList,
  userData,
}: FollowListProps) {
  const users = isFollowerList ? userData.followers : userData.following
  return (
    <div className="follow-list-container">
      <Text textStyle="heading1-bold" color="gray-5">
        {isFollowerList ? '팔로워' : '팔로잉'}
      </Text>
      <ul className="follow-list">
        {users?.map(({ _id, user, follower }) => {
          const targetUserId = isFollowerList ? follower : user
          return <FolllowListItem key={_id} targetUserId={targetUserId} />
        })}
      </ul>
    </div>
  )
}

function FolllowListItem({ targetUserId }: { targetUserId: string }) {
  const { data } = useGetUserDetail(targetUserId)
  const { isFollowing, unavailable, followToggle, followerCount } =
    useFollow(data)
  return (
    <li className="follow-list__item">
      <Avatar
        src={data?.image}
        text={data?.fullName}
        subText={`${followerCount} Followers`}
        size={4}
      />
      <FollowToggleButton
        size="small"
        isFollowing={isFollowing}
        unavailable={unavailable}
        followToggle={followToggle}
      />
    </li>
  )
}
