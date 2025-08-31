function checkAccess(user) {
    let isAdmin = user.role === 'admin';
    let isOwner = user.id === user.resourceOwnerId;
    let isActive = user.status === 'active';
    let isNotBanned = !user.isBanned;

    let canEdit  = (isAdmin || isOwner) && isActive && isNotBanned;
    let canView = isActive && isNotBanned;
    let canDelete = isAdmin && isActive && isNotBanned;

    return {canEdit, canView, canDelete};
}

let user = {
    role: 'user',
    id: 123,
    resourceOwnerId: 123,
    status: 'active',
    isBanned: false
}
console.log(checkAccess(user));