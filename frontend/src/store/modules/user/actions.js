export function updateProfile(profile) {
  return {
    type: '@auth/UPDATE_PROFILE',
    payload: { profile },
  };
}
