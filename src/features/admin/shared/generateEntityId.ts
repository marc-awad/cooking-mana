const ID_BASE = 36
const RANDOM_SEGMENT_LENGTH = 8

export function generateEntityId() {
  const timestampSegment = Date.now().toString(ID_BASE)
  const randomSegment = Math.random()
    .toString(ID_BASE)
    .slice(2, 2 + RANDOM_SEGMENT_LENGTH)

  return `${timestampSegment}-${randomSegment}`
}
