'use strict';


function unwrap(wrapped) {
  switch (wrapped) {
    case "CREATED_AT" :
        return /* CREATED_AT */-600305078;
    case "LOGIN" :
        return /* LOGIN */-152956599;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap(t) {
  if (t !== -600305078) {
    if (t >= -152956599) {
      return "LOGIN";
    } else {
      return "";
    }
  } else {
    return "CREATED_AT";
  }
}

var Enum_EnterpriseMemberOrderField = {
  unwrap: unwrap,
  wrap: wrap
};

function unwrap$1(wrapped) {
  switch (wrapped) {
    case "ASC" :
        return /* ASC */3250961;
    case "DESC" :
        return /* DESC */757540433;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$1(t) {
  if (t !== 3250961) {
    if (t >= 757540433) {
      return "DESC";
    } else {
      return "";
    }
  } else {
    return "ASC";
  }
}

var Enum_OrderDirection = {
  unwrap: unwrap$1,
  wrap: wrap$1
};

function unwrap$2(wrapped) {
  switch (wrapped) {
    case "MEMBER" :
        return /* MEMBER */926453338;
    case "OWNER" :
        return /* OWNER */912576531;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$2(t) {
  if (t !== 912576531) {
    if (t >= 926453338) {
      return "MEMBER";
    } else {
      return "";
    }
  } else {
    return "OWNER";
  }
}

var Enum_EnterpriseUserAccountMembershipRole = {
  unwrap: unwrap$2,
  wrap: wrap$2
};

function unwrap$3(wrapped) {
  switch (wrapped) {
    case "CLOUD" :
        return /* CLOUD */-967749291;
    case "SERVER" :
        return /* SERVER */549058243;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$3(t) {
  if (t !== -769308010) {
    if (t >= 549058243) {
      return "SERVER";
    } else {
      return "CLOUD";
    }
  } else {
    return "";
  }
}

var Enum_EnterpriseUserDeployment = {
  unwrap: unwrap$3,
  wrap: wrap$3
};

function unwrap$4(wrapped) {
  switch (wrapped) {
    case "DEBIAN" :
        return /* DEBIAN */381829749;
    case "DOCKER" :
        return /* DOCKER */-647049696;
    case "MAVEN" :
        return /* MAVEN */18024299;
    case "NPM" :
        return /* NPM */3896779;
    case "NUGET" :
        return /* NUGET */564559503;
    case "PYTHON" :
        return /* PYTHON */-218934756;
    case "RUBYGEMS" :
        return /* RUBYGEMS */-232574370;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$4(t) {
  if (t >= 3896779) {
    if (t >= 381829749) {
      if (t >= 564559503) {
        return "NUGET";
      } else {
        return "DEBIAN";
      }
    } else if (t >= 18024299) {
      return "MAVEN";
    } else {
      return "NPM";
    }
  } else if (t >= -232574370) {
    if (t >= -218934756) {
      return "PYTHON";
    } else {
      return "RUBYGEMS";
    }
  } else if (t >= -647049696) {
    return "DOCKER";
  } else {
    return "";
  }
}

var Enum_RegistryPackageType = {
  unwrap: unwrap$4,
  wrap: wrap$4
};

function unwrap$5(wrapped) {
  switch (wrapped) {
    case "BUNDLED" :
        return /* BUNDLED */-884215166;
    case "DEFAULT" :
        return /* DEFAULT */462924961;
    case "DEV" :
        return /* DEV */3397045;
    case "OPTIONAL" :
        return /* OPTIONAL */-134987872;
    case "PEER" :
        return /* PEER */890612130;
    case "TEST" :
        return /* TEST */934973522;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$5(t) {
  if (t >= 3397045) {
    if (t >= 890612130) {
      if (t >= 934973522) {
        return "TEST";
      } else {
        return "PEER";
      }
    } else if (t >= 462924961) {
      return "DEFAULT";
    } else {
      return "DEV";
    }
  } else if (t !== -769308010) {
    if (t >= -134987872) {
      return "OPTIONAL";
    } else {
      return "BUNDLED";
    }
  } else {
    return "";
  }
}

var Enum_RegistryPackageDependencyType = {
  unwrap: unwrap$5,
  wrap: wrap$5
};

function unwrap$6(wrapped) {
  switch (wrapped) {
    case "CLOSED" :
        return /* CLOSED */-1059826260;
    case "MERGED" :
        return /* MERGED */982149804;
    case "OPEN" :
        return /* OPEN */880069578;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$6(t) {
  if (t >= 880069578) {
    if (t >= 982149804) {
      return "MERGED";
    } else {
      return "OPEN";
    }
  } else if (t >= -769308010) {
    return "";
  } else {
    return "CLOSED";
  }
}

var Enum_PullRequestState = {
  unwrap: unwrap$6,
  wrap: wrap$6
};

function unwrap$7(wrapped) {
  switch (wrapped) {
    case "COMMENTS" :
        return /* COMMENTS */444606772;
    case "CREATED_AT" :
        return /* CREATED_AT */-600305078;
    case "UPDATED_AT" :
        return /* UPDATED_AT */39795671;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$7(t) {
  if (t >= 39795671) {
    if (t >= 444606772) {
      return "COMMENTS";
    } else {
      return "UPDATED_AT";
    }
  } else if (t >= -600305078) {
    return "CREATED_AT";
  } else {
    return "";
  }
}

var Enum_IssueOrderField = {
  unwrap: unwrap$7,
  wrap: wrap$7
};

function unwrap$8(wrapped) {
  switch (wrapped) {
    case "COLLABORATOR" :
        return /* COLLABORATOR */-434170042;
    case "CONTRIBUTOR" :
        return /* CONTRIBUTOR */-702853189;
    case "FIRST_TIMER" :
        return /* FIRST_TIMER */-573416714;
    case "FIRST_TIME_CONTRIBUTOR" :
        return /* FIRST_TIME_CONTRIBUTOR */-692118120;
    case "MEMBER" :
        return /* MEMBER */926453338;
    case "NONE" :
        return /* NONE */868932280;
    case "OWNER" :
        return /* OWNER */912576531;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$8(t) {
  if (t >= -434170042) {
    if (t >= 912576531) {
      if (t >= 926453338) {
        return "MEMBER";
      } else {
        return "OWNER";
      }
    } else if (t >= 868932280) {
      return "NONE";
    } else {
      return "COLLABORATOR";
    }
  } else if (t >= -692118120) {
    if (t >= -573416714) {
      return "FIRST_TIMER";
    } else {
      return "FIRST_TIME_CONTRIBUTOR";
    }
  } else if (t >= -702853189) {
    return "CONTRIBUTOR";
  } else {
    return "";
  }
}

var Enum_CommentAuthorAssociation = {
  unwrap: unwrap$8,
  wrap: wrap$8
};

function unwrap$9(wrapped) {
  switch (wrapped) {
    case "ARCHIVED" :
        return /* ARCHIVED */-957086110;
    case "DENIED" :
        return /* DENIED */514905435;
    case "INSUFFICIENT_ACCESS" :
        return /* INSUFFICIENT_ACCESS */-33363552;
    case "LOCKED" :
        return /* LOCKED */206156042;
    case "LOGIN_REQUIRED" :
        return /* LOGIN_REQUIRED */932058709;
    case "MAINTENANCE" :
        return /* MAINTENANCE */-98382349;
    case "VERIFIED_EMAIL_REQUIRED" :
        return /* VERIFIED_EMAIL_REQUIRED */32967641;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$9(t) {
  if (t >= 32967641) {
    if (t >= 514905435) {
      if (t >= 932058709) {
        return "LOGIN_REQUIRED";
      } else {
        return "DENIED";
      }
    } else if (t >= 206156042) {
      return "LOCKED";
    } else {
      return "VERIFIED_EMAIL_REQUIRED";
    }
  } else if (t >= -98382349) {
    if (t >= -33363552) {
      return "INSUFFICIENT_ACCESS";
    } else {
      return "MAINTENANCE";
    }
  } else if (t >= -769308010) {
    return "";
  } else {
    return "ARCHIVED";
  }
}

var Enum_CommentCannotUpdateReason = {
  unwrap: unwrap$9,
  wrap: wrap$9
};

function unwrap$10(wrapped) {
  switch (wrapped) {
    case "CLOSED" :
        return /* CLOSED */-1059826260;
    case "OPEN" :
        return /* OPEN */880069578;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$10(t) {
  if (t !== -769308010) {
    if (t >= 880069578) {
      return "OPEN";
    } else {
      return "CLOSED";
    }
  } else {
    return "";
  }
}

var Enum_IssueState = {
  unwrap: unwrap$10,
  wrap: wrap$10
};

function unwrap$11(wrapped) {
  switch (wrapped) {
    case "OFF_TOPIC" :
        return /* OFF_TOPIC */690873695;
    case "RESOLVED" :
        return /* RESOLVED */-432665608;
    case "SPAM" :
        return /* SPAM */924426953;
    case "TOO_HEATED" :
        return /* TOO_HEATED */-175775942;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$11(t) {
  if (t !== -432665608) {
    if (t >= 690873695) {
      if (t >= 924426953) {
        return "SPAM";
      } else {
        return "OFF_TOPIC";
      }
    } else if (t >= -175775942) {
      return "TOO_HEATED";
    } else {
      return "";
    }
  } else {
    return "RESOLVED";
  }
}

var Enum_LockReason = {
  unwrap: unwrap$11,
  wrap: wrap$11
};

function unwrap$12(wrapped) {
  switch (wrapped) {
    case "CONFUSED" :
        return /* CONFUSED */61120033;
    case "EYES" :
        return /* EYES */769621474;
    case "HEART" :
        return /* HEART */581375846;
    case "HOORAY" :
        return /* HOORAY */-87024798;
    case "LAUGH" :
        return /* LAUGH */-307514783;
    case "ROCKET" :
        return /* ROCKET */-227681452;
    case "THUMBS_DOWN" :
        return /* THUMBS_DOWN */-458717820;
    case "THUMBS_UP" :
        return /* THUMBS_UP */488186621;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$12(t) {
  if (t >= -87024798) {
    if (t !== 61120033) {
      if (t >= 581375846) {
        if (t >= 769621474) {
          return "EYES";
        } else {
          return "HEART";
        }
      } else if (t >= 488186621) {
        return "THUMBS_UP";
      } else {
        return "HOORAY";
      }
    } else {
      return "CONFUSED";
    }
  } else if (t >= -307514783) {
    if (t >= -227681452) {
      return "ROCKET";
    } else {
      return "LAUGH";
    }
  } else if (t >= -458717820) {
    return "THUMBS_DOWN";
  } else {
    return "";
  }
}

var Enum_ReactionContent = {
  unwrap: unwrap$12,
  wrap: wrap$12
};

function unwrap$13(wrapped) {
  if (wrapped === "CREATED_AT") {
    return /* CREATED_AT */-600305078;
  } else {
    return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$13(t) {
  if (t >= -600305078) {
    return "CREATED_AT";
  } else {
    return "";
  }
}

var Enum_ReactionOrderField = {
  unwrap: unwrap$13,
  wrap: wrap$13
};

function unwrap$14(wrapped) {
  switch (wrapped) {
    case "ARCHIVED" :
        return /* ARCHIVED */-957086110;
    case "NOT_ARCHIVED" :
        return /* NOT_ARCHIVED */-202386834;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$14(t) {
  if (t !== -769308010) {
    if (t >= -202386834) {
      return "NOT_ARCHIVED";
    } else {
      return "ARCHIVED";
    }
  } else {
    return "";
  }
}

var Enum_ProjectCardArchivedState = {
  unwrap: unwrap$14,
  wrap: wrap$14
};

function unwrap$15(wrapped) {
  switch (wrapped) {
    case "CONTENT_ONLY" :
        return /* CONTENT_ONLY */-616206958;
    case "NOTE_ONLY" :
        return /* NOTE_ONLY */256801817;
    case "REDACTED" :
        return /* REDACTED */-783609024;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$15(t) {
  if (t >= -616206958) {
    if (t >= 256801817) {
      return "NOTE_ONLY";
    } else {
      return "CONTENT_ONLY";
    }
  } else if (t >= -769308010) {
    return "";
  } else {
    return "REDACTED";
  }
}

var Enum_ProjectCardState = {
  unwrap: unwrap$15,
  wrap: wrap$15
};

function unwrap$16(wrapped) {
  switch (wrapped) {
    case "DONE" :
        return /* DONE */758036610;
    case "IN_PROGRESS" :
        return /* IN_PROGRESS */-43804025;
    case "TODO" :
        return /* TODO */935467462;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$16(t) {
  if (t >= 758036610) {
    if (t >= 935467462) {
      return "TODO";
    } else {
      return "DONE";
    }
  } else if (t >= -43804025) {
    return "IN_PROGRESS";
  } else {
    return "";
  }
}

var Enum_ProjectColumnPurpose = {
  unwrap: unwrap$16,
  wrap: wrap$16
};

function unwrap$17(wrapped) {
  switch (wrapped) {
    case "CLOSED" :
        return /* CLOSED */-1059826260;
    case "OPEN" :
        return /* OPEN */880069578;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$17(t) {
  if (t !== -769308010) {
    if (t >= 880069578) {
      return "OPEN";
    } else {
      return "CLOSED";
    }
  } else {
    return "";
  }
}

var Enum_ProjectState = {
  unwrap: unwrap$17,
  wrap: wrap$17
};

function unwrap$18(wrapped) {
  switch (wrapped) {
    case "CREATED_AT" :
        return /* CREATED_AT */-600305078;
    case "NAME" :
        return /* NAME */868235851;
    case "UPDATED_AT" :
        return /* UPDATED_AT */39795671;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$18(t) {
  if (t >= 39795671) {
    if (t >= 868235851) {
      return "NAME";
    } else {
      return "UPDATED_AT";
    }
  } else if (t >= -600305078) {
    return "CREATED_AT";
  } else {
    return "";
  }
}

var Enum_ProjectOrderField = {
  unwrap: unwrap$18,
  wrap: wrap$18
};

function unwrap$19(wrapped) {
  switch (wrapped) {
    case "IGNORED" :
        return /* IGNORED */-592639246;
    case "SUBSCRIBED" :
        return /* SUBSCRIBED */-839169574;
    case "UNSUBSCRIBED" :
        return /* UNSUBSCRIBED */-431006349;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$19(t) {
  if (t >= -592639246) {
    if (t >= -431006349) {
      return "UNSUBSCRIBED";
    } else {
      return "IGNORED";
    }
  } else if (t >= -769308010) {
    return "";
  } else {
    return "SUBSCRIBED";
  }
}

var Enum_SubscriptionState = {
  unwrap: unwrap$19,
  wrap: wrap$19
};

function unwrap$20(wrapped) {
  if (wrapped === "STARRED_AT") {
    return /* STARRED_AT */405717971;
  } else {
    return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$20(t) {
  if (t >= 405717971) {
    return "STARRED_AT";
  } else {
    return "";
  }
}

var Enum_StarOrderField = {
  unwrap: unwrap$20,
  wrap: wrap$20
};

function unwrap$21(wrapped) {
  switch (wrapped) {
    case "BILLING" :
        return /* BILLING */-578950373;
    case "MIGRATING" :
        return /* MIGRATING */947908552;
    case "MOVING" :
        return /* MOVING */-13459826;
    case "RENAME" :
        return /* RENAME */933877630;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$21(t) {
  if (t !== -578950373) {
    if (t >= 933877630) {
      if (t >= 947908552) {
        return "MIGRATING";
      } else {
        return "RENAME";
      }
    } else if (t >= -13459826) {
      return "MOVING";
    } else {
      return "";
    }
  } else {
    return "BILLING";
  }
}

var Enum_RepositoryLockReason = {
  unwrap: unwrap$21,
  wrap: wrap$21
};

function unwrap$22(wrapped) {
  switch (wrapped) {
    case "PRIVATE" :
        return /* PRIVATE */155386083;
    case "PUBLIC" :
        return /* PUBLIC */427175081;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$22(t) {
  if (t !== 155386083) {
    if (t >= 427175081) {
      return "PUBLIC";
    } else {
      return "";
    }
  } else {
    return "PRIVATE";
  }
}

var Enum_RepositoryPrivacy = {
  unwrap: unwrap$22,
  wrap: wrap$22
};

function unwrap$23(wrapped) {
  switch (wrapped) {
    case "CREATED_AT" :
        return /* CREATED_AT */-600305078;
    case "NAME" :
        return /* NAME */868235851;
    case "PUSHED_AT" :
        return /* PUSHED_AT */372836345;
    case "STARGAZERS" :
        return /* STARGAZERS */-216105064;
    case "UPDATED_AT" :
        return /* UPDATED_AT */39795671;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$23(t) {
  if (t >= -216105064) {
    if (t >= 372836345) {
      if (t >= 868235851) {
        return "NAME";
      } else {
        return "PUSHED_AT";
      }
    } else if (t >= 39795671) {
      return "UPDATED_AT";
    } else {
      return "STARGAZERS";
    }
  } else if (t >= -600305078) {
    return "CREATED_AT";
  } else {
    return "";
  }
}

var Enum_RepositoryOrderField = {
  unwrap: unwrap$23,
  wrap: wrap$23
};

function unwrap$24(wrapped) {
  switch (wrapped) {
    case "COLLABORATOR" :
        return /* COLLABORATOR */-434170042;
    case "ORGANIZATION_MEMBER" :
        return /* ORGANIZATION_MEMBER */-1056373018;
    case "OWNER" :
        return /* OWNER */912576531;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$24(t) {
  if (t >= -434170042) {
    if (t >= 912576531) {
      return "OWNER";
    } else {
      return "COLLABORATOR";
    }
  } else if (t >= -769308010) {
    return "";
  } else {
    return "ORGANIZATION_MEMBER";
  }
}

var Enum_RepositoryAffiliation = {
  unwrap: unwrap$24,
  wrap: wrap$24
};

function unwrap$25(wrapped) {
  if (wrapped === "UPDATED_AT") {
    return /* UPDATED_AT */39795671;
  } else {
    return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$25(t) {
  if (t >= 39795671) {
    return "UPDATED_AT";
  } else {
    return "";
  }
}

var Enum_UserStatusOrderField = {
  unwrap: unwrap$25,
  wrap: wrap$25
};

function unwrap$26(wrapped) {
  switch (wrapped) {
    case "GIST" :
        return /* GIST */791008067;
    case "ISSUE" :
        return /* ISSUE */1063015353;
    case "ORGANIZATION" :
        return /* ORGANIZATION */-550929037;
    case "PROJECT" :
        return /* PROJECT */-172038471;
    case "PULL_REQUEST" :
        return /* PULL_REQUEST */159624565;
    case "REPOSITORY" :
        return /* REPOSITORY */393245578;
    case "TEAM" :
        return /* TEAM */934969501;
    case "USER" :
        return /* USER */946756171;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$26(t) {
  if (t >= 393245578) {
    if (t !== 791008067) {
      if (t >= 946756171) {
        if (t >= 1063015353) {
          return "ISSUE";
        } else {
          return "USER";
        }
      } else if (t >= 934969501) {
        return "TEAM";
      } else {
        return "REPOSITORY";
      }
    } else {
      return "GIST";
    }
  } else if (t >= -172038471) {
    if (t >= 159624565) {
      return "PULL_REQUEST";
    } else {
      return "PROJECT";
    }
  } else if (t >= -550929037) {
    return "ORGANIZATION";
  } else {
    return "";
  }
}

var Enum_PinnableItemType = {
  unwrap: unwrap$26,
  wrap: wrap$26
};

function unwrap$27(wrapped) {
  switch (wrapped) {
    case "CREATED_AT" :
        return /* CREATED_AT */-600305078;
    case "PUSHED_AT" :
        return /* PUSHED_AT */372836345;
    case "UPDATED_AT" :
        return /* UPDATED_AT */39795671;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$27(t) {
  if (t >= 39795671) {
    if (t >= 372836345) {
      return "PUSHED_AT";
    } else {
      return "UPDATED_AT";
    }
  } else if (t >= -600305078) {
    return "CREATED_AT";
  } else {
    return "";
  }
}

var Enum_GistOrderField = {
  unwrap: unwrap$27,
  wrap: wrap$27
};

function unwrap$28(wrapped) {
  switch (wrapped) {
    case "PRIVATE" :
        return /* PRIVATE */155386083;
    case "PUBLIC" :
        return /* PUBLIC */427175081;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$28(t) {
  if (t !== 155386083) {
    if (t >= 427175081) {
      return "PUBLIC";
    } else {
      return "";
    }
  } else {
    return "PRIVATE";
  }
}

var Enum_SponsorshipPrivacy = {
  unwrap: unwrap$28,
  wrap: wrap$28
};

function unwrap$29(wrapped) {
  if (wrapped === "CREATED_AT") {
    return /* CREATED_AT */-600305078;
  } else {
    return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$29(t) {
  if (t >= -600305078) {
    return "CREATED_AT";
  } else {
    return "";
  }
}

var Enum_AuditLogOrderField = {
  unwrap: unwrap$29,
  wrap: wrap$29
};

function unwrap$30(wrapped) {
  switch (wrapped) {
    case "ACCESS" :
        return /* ACCESS */1032405412;
    case "AUTHENTICATION" :
        return /* AUTHENTICATION */281611640;
    case "CREATE" :
        return /* CREATE */781325052;
    case "MODIFY" :
        return /* MODIFY */-213073798;
    case "REMOVE" :
        return /* REMOVE */923486276;
    case "RESTORE" :
        return /* RESTORE */-360432850;
    case "TRANSFER" :
        return /* TRANSFER */871579435;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$30(t) {
  if (t >= 781325052) {
    if (t >= 923486276) {
      if (t >= 1032405412) {
        return "ACCESS";
      } else {
        return "REMOVE";
      }
    } else if (t >= 871579435) {
      return "TRANSFER";
    } else {
      return "CREATE";
    }
  } else if (t >= -213073798) {
    if (t >= 281611640) {
      return "AUTHENTICATION";
    } else {
      return "MODIFY";
    }
  } else if (t >= -360432850) {
    return "RESTORE";
  } else {
    return "";
  }
}

var Enum_OperationType = {
  unwrap: unwrap$30,
  wrap: wrap$30
};

function unwrap$31(wrapped) {
  switch (wrapped) {
    case "ACTIVE" :
        return /* ACTIVE */-926356026;
    case "PENDING_DELETION" :
        return /* PENDING_DELETION */446310230;
    case "SUSPENDED" :
        return /* SUSPENDED */-932196677;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$31(t) {
  if (t >= -769308010) {
    if (t >= 446310230) {
      return "PENDING_DELETION";
    } else {
      return "";
    }
  } else if (t >= -926356026) {
    return "ACTIVE";
  } else {
    return "SUSPENDED";
  }
}

var Enum_OauthApplicationCreateAuditEntryState = {
  unwrap: unwrap$31,
  wrap: wrap$31
};

function unwrap$32(wrapped) {
  switch (wrapped) {
    case "ADMIN" :
        return /* ADMIN */439936111;
    case "READ" :
        return /* READ */912790358;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$32(t) {
  if (t !== 439936111) {
    if (t >= 912790358) {
      return "READ";
    } else {
      return "";
    }
  } else {
    return "ADMIN";
  }
}

var Enum_OrgAddMemberAuditEntryPermission = {
  unwrap: unwrap$32,
  wrap: wrap$32
};

function unwrap$33(wrapped) {
  switch (wrapped) {
    case "BUSINESS" :
        return /* BUSINESS */-112955840;
    case "BUSINESS_PLUS" :
        return /* BUSINESS_PLUS */821038329;
    case "FREE" :
        return /* FREE */780362924;
    case "TIERED_PER_SEAT" :
        return /* TIERED_PER_SEAT */569606469;
    case "UNLIMITED" :
        return /* UNLIMITED */105804545;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$33(t) {
  if (t >= 105804545) {
    if (t >= 780362924) {
      if (t >= 821038329) {
        return "BUSINESS_PLUS";
      } else {
        return "FREE";
      }
    } else if (t >= 569606469) {
      return "TIERED_PER_SEAT";
    } else {
      return "UNLIMITED";
    }
  } else if (t >= -112955840) {
    return "BUSINESS";
  } else {
    return "";
  }
}

var Enum_OrgCreateAuditEntryBillingPlan = {
  unwrap: unwrap$33,
  wrap: wrap$33
};

function unwrap$34(wrapped) {
  switch (wrapped) {
    case "EMAIL" :
        return /* EMAIL */-306379012;
    case "USER" :
        return /* USER */946756171;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$34(t) {
  if (t !== -306379012) {
    if (t >= 946756171) {
      return "USER";
    } else {
      return "";
    }
  } else {
    return "EMAIL";
  }
}

var Enum_OrganizationInvitationType = {
  unwrap: unwrap$34,
  wrap: wrap$34
};

function unwrap$35(wrapped) {
  switch (wrapped) {
    case "ADMIN" :
        return /* ADMIN */439936111;
    case "BILLING_MANAGER" :
        return /* BILLING_MANAGER */-895173143;
    case "DIRECT_MEMBER" :
        return /* DIRECT_MEMBER */24367088;
    case "REINSTATE" :
        return /* REINSTATE */156963993;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$35(t) {
  if (t !== -769308010) {
    if (t >= 156963993) {
      if (t >= 439936111) {
        return "ADMIN";
      } else {
        return "REINSTATE";
      }
    } else if (t >= 24367088) {
      return "DIRECT_MEMBER";
    } else {
      return "BILLING_MANAGER";
    }
  } else {
    return "";
  }
}

var Enum_OrganizationInvitationRole = {
  unwrap: unwrap$35,
  wrap: wrap$35
};

function unwrap$36(wrapped) {
  switch (wrapped) {
    case "SAML_EXTERNAL_IDENTITY_MISSING" :
        return /* SAML_EXTERNAL_IDENTITY_MISSING */512587047;
    case "SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY" :
        return /* SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY */-677516542;
    case "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE" :
        return /* TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE */1007143398;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$36(t) {
  if (t >= 512587047) {
    if (t >= 1007143398) {
      return "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE";
    } else {
      return "SAML_EXTERNAL_IDENTITY_MISSING";
    }
  } else if (t >= -677516542) {
    return "SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY";
  } else {
    return "";
  }
}

var Enum_OrgRemoveBillingManagerAuditEntryReason = {
  unwrap: unwrap$36,
  wrap: wrap$36
};

function unwrap$37(wrapped) {
  switch (wrapped) {
    case "ADMIN" :
        return /* ADMIN */439936111;
    case "BILLING_MANAGER" :
        return /* BILLING_MANAGER */-895173143;
    case "DIRECT_MEMBER" :
        return /* DIRECT_MEMBER */24367088;
    case "OUTSIDE_COLLABORATOR" :
        return /* OUTSIDE_COLLABORATOR */-451589632;
    case "UNAFFILIATED" :
        return /* UNAFFILIATED */792717328;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$37(t) {
  if (t >= -451589632) {
    if (t >= 439936111) {
      if (t >= 792717328) {
        return "UNAFFILIATED";
      } else {
        return "ADMIN";
      }
    } else if (t >= 24367088) {
      return "DIRECT_MEMBER";
    } else {
      return "OUTSIDE_COLLABORATOR";
    }
  } else if (t >= -769308010) {
    return "";
  } else {
    return "BILLING_MANAGER";
  }
}

var Enum_OrgRemoveMemberAuditEntryMembershipType = {
  unwrap: unwrap$37,
  wrap: wrap$37
};

function unwrap$38(wrapped) {
  switch (wrapped) {
    case "SAML_EXTERNAL_IDENTITY_MISSING" :
        return /* SAML_EXTERNAL_IDENTITY_MISSING */512587047;
    case "SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY" :
        return /* SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY */-677516542;
    case "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE" :
        return /* TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE */1007143398;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$38(t) {
  if (t >= 512587047) {
    if (t >= 1007143398) {
      return "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE";
    } else {
      return "SAML_EXTERNAL_IDENTITY_MISSING";
    }
  } else if (t >= -677516542) {
    return "SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY";
  } else {
    return "";
  }
}

var Enum_OrgRemoveMemberAuditEntryReason = {
  unwrap: unwrap$38,
  wrap: wrap$38
};

function unwrap$39(wrapped) {
  switch (wrapped) {
    case "BILLING_MANAGER" :
        return /* BILLING_MANAGER */-895173143;
    case "OUTSIDE_COLLABORATOR" :
        return /* OUTSIDE_COLLABORATOR */-451589632;
    case "UNAFFILIATED" :
        return /* UNAFFILIATED */792717328;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$39(t) {
  if (t >= -451589632) {
    if (t >= 792717328) {
      return "UNAFFILIATED";
    } else {
      return "OUTSIDE_COLLABORATOR";
    }
  } else if (t >= -769308010) {
    return "";
  } else {
    return "BILLING_MANAGER";
  }
}

var Enum_OrgRemoveOutsideCollaboratorAuditEntryMembershipType = {
  unwrap: unwrap$39,
  wrap: wrap$39
};

function unwrap$40(wrapped) {
  switch (wrapped) {
    case "SAML_EXTERNAL_IDENTITY_MISSING" :
        return /* SAML_EXTERNAL_IDENTITY_MISSING */512587047;
    case "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE" :
        return /* TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE */1007143398;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$40(t) {
  if (t !== 512587047) {
    if (t >= 1007143398) {
      return "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE";
    } else {
      return "";
    }
  } else {
    return "SAML_EXTERNAL_IDENTITY_MISSING";
  }
}

var Enum_OrgRemoveOutsideCollaboratorAuditEntryReason = {
  unwrap: unwrap$40,
  wrap: wrap$40
};

function unwrap$41(wrapped) {
  switch (wrapped) {
    case "ADMIN" :
        return /* ADMIN */439936111;
    case "NONE" :
        return /* NONE */868932280;
    case "READ" :
        return /* READ */912790358;
    case "WRITE" :
        return /* WRITE */-834165569;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$41(t) {
  if (t !== -769308010) {
    if (t >= 868932280) {
      if (t >= 912790358) {
        return "READ";
      } else {
        return "NONE";
      }
    } else if (t >= 439936111) {
      return "ADMIN";
    } else {
      return "WRITE";
    }
  } else {
    return "";
  }
}

var Enum_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission = {
  unwrap: unwrap$41,
  wrap: wrap$41
};

function unwrap$42(wrapped) {
  switch (wrapped) {
    case "ADMIN" :
        return /* ADMIN */439936111;
    case "READ" :
        return /* READ */912790358;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$42(t) {
  if (t !== 439936111) {
    if (t >= 912790358) {
      return "READ";
    } else {
      return "";
    }
  } else {
    return "ADMIN";
  }
}

var Enum_OrgUpdateMemberAuditEntryPermission = {
  unwrap: unwrap$42,
  wrap: wrap$42
};

function unwrap$43(wrapped) {
  switch (wrapped) {
    case "ALL" :
        return /* ALL */3249409;
    case "PUBLIC" :
        return /* PUBLIC */427175081;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$43(t) {
  if (t !== 3249409) {
    if (t >= 427175081) {
      return "PUBLIC";
    } else {
      return "";
    }
  } else {
    return "ALL";
  }
}

var Enum_OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility = {
  unwrap: unwrap$43,
  wrap: wrap$43
};

function unwrap$44(wrapped) {
  switch (wrapped) {
    case "INTERNAL" :
        return /* INTERNAL */33290045;
    case "PRIVATE" :
        return /* PRIVATE */155386083;
    case "PUBLIC" :
        return /* PUBLIC */427175081;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$44(t) {
  if (t >= 155386083) {
    if (t >= 427175081) {
      return "PUBLIC";
    } else {
      return "PRIVATE";
    }
  } else if (t >= 33290045) {
    return "INTERNAL";
  } else {
    return "";
  }
}

var Enum_RepoAccessAuditEntryVisibility = {
  unwrap: unwrap$44,
  wrap: wrap$44
};

function unwrap$45(wrapped) {
  switch (wrapped) {
    case "INTERNAL" :
        return /* INTERNAL */33290045;
    case "PRIVATE" :
        return /* PRIVATE */155386083;
    case "PUBLIC" :
        return /* PUBLIC */427175081;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$45(t) {
  if (t >= 155386083) {
    if (t >= 427175081) {
      return "PUBLIC";
    } else {
      return "PRIVATE";
    }
  } else if (t >= 33290045) {
    return "INTERNAL";
  } else {
    return "";
  }
}

var Enum_RepoAddMemberAuditEntryVisibility = {
  unwrap: unwrap$45,
  wrap: wrap$45
};

function unwrap$46(wrapped) {
  switch (wrapped) {
    case "INTERNAL" :
        return /* INTERNAL */33290045;
    case "PRIVATE" :
        return /* PRIVATE */155386083;
    case "PUBLIC" :
        return /* PUBLIC */427175081;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$46(t) {
  if (t >= 155386083) {
    if (t >= 427175081) {
      return "PUBLIC";
    } else {
      return "PRIVATE";
    }
  } else if (t >= 33290045) {
    return "INTERNAL";
  } else {
    return "";
  }
}

var Enum_RepoArchivedAuditEntryVisibility = {
  unwrap: unwrap$46,
  wrap: wrap$46
};

function unwrap$47(wrapped) {
  switch (wrapped) {
    case "MERGE" :
        return /* MERGE */62184088;
    case "REBASE" :
        return /* REBASE */800804164;
    case "SQUASH" :
        return /* SQUASH */192195967;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$47(t) {
  if (t >= 192195967) {
    if (t >= 800804164) {
      return "REBASE";
    } else {
      return "SQUASH";
    }
  } else if (t >= 62184088) {
    return "MERGE";
  } else {
    return "";
  }
}

var Enum_RepoChangeMergeSettingAuditEntryMergeType = {
  unwrap: unwrap$47,
  wrap: wrap$47
};

function unwrap$48(wrapped) {
  switch (wrapped) {
    case "INTERNAL" :
        return /* INTERNAL */33290045;
    case "PRIVATE" :
        return /* PRIVATE */155386083;
    case "PUBLIC" :
        return /* PUBLIC */427175081;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$48(t) {
  if (t >= 155386083) {
    if (t >= 427175081) {
      return "PUBLIC";
    } else {
      return "PRIVATE";
    }
  } else if (t >= 33290045) {
    return "INTERNAL";
  } else {
    return "";
  }
}

var Enum_RepoCreateAuditEntryVisibility = {
  unwrap: unwrap$48,
  wrap: wrap$48
};

function unwrap$49(wrapped) {
  switch (wrapped) {
    case "INTERNAL" :
        return /* INTERNAL */33290045;
    case "PRIVATE" :
        return /* PRIVATE */155386083;
    case "PUBLIC" :
        return /* PUBLIC */427175081;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$49(t) {
  if (t >= 155386083) {
    if (t >= 427175081) {
      return "PUBLIC";
    } else {
      return "PRIVATE";
    }
  } else if (t >= 33290045) {
    return "INTERNAL";
  } else {
    return "";
  }
}

var Enum_RepoDestroyAuditEntryVisibility = {
  unwrap: unwrap$49,
  wrap: wrap$49
};

function unwrap$50(wrapped) {
  switch (wrapped) {
    case "INTERNAL" :
        return /* INTERNAL */33290045;
    case "PRIVATE" :
        return /* PRIVATE */155386083;
    case "PUBLIC" :
        return /* PUBLIC */427175081;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$50(t) {
  if (t >= 155386083) {
    if (t >= 427175081) {
      return "PUBLIC";
    } else {
      return "PRIVATE";
    }
  } else if (t >= 33290045) {
    return "INTERNAL";
  } else {
    return "";
  }
}

var Enum_RepoRemoveMemberAuditEntryVisibility = {
  unwrap: unwrap$50,
  wrap: wrap$50
};

function unwrap$51(wrapped) {
  switch (wrapped) {
    case "ADMIN" :
        return /* ADMIN */439936111;
    case "MEMBER" :
        return /* MEMBER */926453338;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$51(t) {
  if (t !== 439936111) {
    if (t >= 926453338) {
      return "MEMBER";
    } else {
      return "";
    }
  } else {
    return "ADMIN";
  }
}

var Enum_OrganizationMemberRole = {
  unwrap: unwrap$51,
  wrap: wrap$51
};

function unwrap$52(wrapped) {
  switch (wrapped) {
    case "SECRET" :
        return /* SECRET */382515824;
    case "VISIBLE" :
        return /* VISIBLE */586697810;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$52(t) {
  if (t !== 382515824) {
    if (t >= 586697810) {
      return "VISIBLE";
    } else {
      return "";
    }
  } else {
    return "SECRET";
  }
}

var Enum_TeamPrivacy = {
  unwrap: unwrap$52,
  wrap: wrap$52
};

function unwrap$53(wrapped) {
  switch (wrapped) {
    case "ADMIN" :
        return /* ADMIN */439936111;
    case "MEMBER" :
        return /* MEMBER */926453338;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$53(t) {
  if (t !== 439936111) {
    if (t >= 926453338) {
      return "MEMBER";
    } else {
      return "";
    }
  } else {
    return "ADMIN";
  }
}

var Enum_TeamRole = {
  unwrap: unwrap$53,
  wrap: wrap$53
};

function unwrap$54(wrapped) {
  if (wrapped === "NAME") {
    return /* NAME */868235851;
  } else {
    return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$54(t) {
  if (t >= 868235851) {
    return "NAME";
  } else {
    return "";
  }
}

var Enum_TeamOrderField = {
  unwrap: unwrap$54,
  wrap: wrap$54
};

function unwrap$55(wrapped) {
  if (wrapped === "NUMBER") {
    return /* NUMBER */-738381111;
  } else {
    return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$55(t) {
  if (t >= -738381111) {
    return "NUMBER";
  } else {
    return "";
  }
}

var Enum_TeamDiscussionCommentOrderField = {
  unwrap: unwrap$55,
  wrap: wrap$55
};

function unwrap$56(wrapped) {
  if (wrapped === "CREATED_AT") {
    return /* CREATED_AT */-600305078;
  } else {
    return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$56(t) {
  if (t >= -600305078) {
    return "CREATED_AT";
  } else {
    return "";
  }
}

var Enum_TeamDiscussionOrderField = {
  unwrap: unwrap$56,
  wrap: wrap$56
};

function unwrap$57(wrapped) {
  switch (wrapped) {
    case "ALL" :
        return /* ALL */3249409;
    case "CHILD_TEAM" :
        return /* CHILD_TEAM */-365635200;
    case "IMMEDIATE" :
        return /* IMMEDIATE */-884374575;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$57(t) {
  if (t >= -365635200) {
    if (t >= 3249409) {
      return "ALL";
    } else {
      return "CHILD_TEAM";
    }
  } else if (t >= -769308010) {
    return "";
  } else {
    return "IMMEDIATE";
  }
}

var Enum_TeamMembershipType = {
  unwrap: unwrap$57,
  wrap: wrap$57
};

function unwrap$58(wrapped) {
  switch (wrapped) {
    case "MAINTAINER" :
        return /* MAINTAINER */337671288;
    case "MEMBER" :
        return /* MEMBER */926453338;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$58(t) {
  if (t !== 337671288) {
    if (t >= 926453338) {
      return "MEMBER";
    } else {
      return "";
    }
  } else {
    return "MAINTAINER";
  }
}

var Enum_TeamMemberRole = {
  unwrap: unwrap$58,
  wrap: wrap$58
};

function unwrap$59(wrapped) {
  switch (wrapped) {
    case "CREATED_AT" :
        return /* CREATED_AT */-600305078;
    case "LOGIN" :
        return /* LOGIN */-152956599;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$59(t) {
  if (t !== -600305078) {
    if (t >= -152956599) {
      return "LOGIN";
    } else {
      return "";
    }
  } else {
    return "CREATED_AT";
  }
}

var Enum_TeamMemberOrderField = {
  unwrap: unwrap$59,
  wrap: wrap$59
};

function unwrap$60(wrapped) {
  switch (wrapped) {
    case "CREATED_AT" :
        return /* CREATED_AT */-600305078;
    case "NAME" :
        return /* NAME */868235851;
    case "PERMISSION" :
        return /* PERMISSION */-136846065;
    case "PUSHED_AT" :
        return /* PUSHED_AT */372836345;
    case "STARGAZERS" :
        return /* STARGAZERS */-216105064;
    case "UPDATED_AT" :
        return /* UPDATED_AT */39795671;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$60(t) {
  if (t >= -136846065) {
    if (t >= 372836345) {
      if (t >= 868235851) {
        return "NAME";
      } else {
        return "PUSHED_AT";
      }
    } else if (t >= 39795671) {
      return "UPDATED_AT";
    } else {
      return "PERMISSION";
    }
  } else if (t !== -600305078) {
    if (t >= -216105064) {
      return "STARGAZERS";
    } else {
      return "";
    }
  } else {
    return "CREATED_AT";
  }
}

var Enum_TeamRepositoryOrderField = {
  unwrap: unwrap$60,
  wrap: wrap$60
};

function unwrap$61(wrapped) {
  switch (wrapped) {
    case "ADMIN" :
        return /* ADMIN */439936111;
    case "MAINTAIN" :
        return /* MAINTAIN */338005835;
    case "READ" :
        return /* READ */912790358;
    case "TRIAGE" :
        return /* TRIAGE */-45611916;
    case "WRITE" :
        return /* WRITE */-834165569;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$61(t) {
  if (t >= -45611916) {
    if (t >= 439936111) {
      if (t >= 912790358) {
        return "READ";
      } else {
        return "ADMIN";
      }
    } else if (t >= 338005835) {
      return "MAINTAIN";
    } else {
      return "TRIAGE";
    }
  } else if (t >= -769308010) {
    return "";
  } else {
    return "WRITE";
  }
}

var Enum_RepositoryPermission = {
  unwrap: unwrap$61,
  wrap: wrap$61
};

function unwrap$62(wrapped) {
  switch (wrapped) {
    case "ALL" :
        return /* ALL */3249409;
    case "DIRECT" :
        return /* DIRECT */-286460119;
    case "OUTSIDE" :
        return /* OUTSIDE */-432905979;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$62(t) {
  if (t >= -286460119) {
    if (t >= 3249409) {
      return "ALL";
    } else {
      return "DIRECT";
    }
  } else if (t >= -432905979) {
    return "OUTSIDE";
  } else {
    return "";
  }
}

var Enum_CollaboratorAffiliation = {
  unwrap: unwrap$62,
  wrap: wrap$62
};

function unwrap$63(wrapped) {
  switch (wrapped) {
    case "ADMIN" :
        return /* ADMIN */439936111;
    case "NONE" :
        return /* NONE */868932280;
    case "READ" :
        return /* READ */912790358;
    case "WRITE" :
        return /* WRITE */-834165569;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$63(t) {
  if (t !== -769308010) {
    if (t >= 868932280) {
      if (t >= 912790358) {
        return "READ";
      } else {
        return "NONE";
      }
    } else if (t >= 439936111) {
      return "ADMIN";
    } else {
      return "WRITE";
    }
  } else {
    return "";
  }
}

var Enum_DefaultRepositoryPermissionField = {
  unwrap: unwrap$63,
  wrap: wrap$63
};

function unwrap$64(wrapped) {
  switch (wrapped) {
    case "CREATED_AT" :
        return /* CREATED_AT */-600305078;
    case "UPDATED_AT" :
        return /* UPDATED_AT */39795671;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$64(t) {
  if (t !== -600305078) {
    if (t >= 39795671) {
      return "UPDATED_AT";
    } else {
      return "";
    }
  } else {
    return "CREATED_AT";
  }
}

var Enum_PullRequestOrderField = {
  unwrap: unwrap$64,
  wrap: wrap$64
};

function unwrap$65(wrapped) {
  if (wrapped === "CREATED_AT") {
    return /* CREATED_AT */-600305078;
  } else {
    return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$65(t) {
  if (t >= -600305078) {
    return "CREATED_AT";
  } else {
    return "";
  }
}

var Enum_DeploymentOrderField = {
  unwrap: unwrap$65,
  wrap: wrap$65
};

function unwrap$66(wrapped) {
  switch (wrapped) {
    case "ERROR" :
        return /* ERROR */-250084440;
    case "FAILURE" :
        return /* FAILURE */382616618;
    case "INACTIVE" :
        return /* INACTIVE */-1011505301;
    case "IN_PROGRESS" :
        return /* IN_PROGRESS */-43804025;
    case "PENDING" :
        return /* PENDING */734030903;
    case "QUEUED" :
        return /* QUEUED */30670259;
    case "SUCCESS" :
        return /* SUCCESS */941750691;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$66(t) {
  if (t >= 30670259) {
    if (t >= 734030903) {
      if (t >= 941750691) {
        return "SUCCESS";
      } else {
        return "PENDING";
      }
    } else if (t >= 382616618) {
      return "FAILURE";
    } else {
      return "QUEUED";
    }
  } else if (t >= -250084440) {
    if (t >= -43804025) {
      return "IN_PROGRESS";
    } else {
      return "ERROR";
    }
  } else if (t >= -769308010) {
    return "";
  } else {
    return "INACTIVE";
  }
}

var Enum_DeploymentStatusState = {
  unwrap: unwrap$66,
  wrap: wrap$66
};

function unwrap$67(wrapped) {
  switch (wrapped) {
    case "ABANDONED" :
        return /* ABANDONED */-389473612;
    case "ACTIVE" :
        return /* ACTIVE */-926356026;
    case "DESTROYED" :
        return /* DESTROYED */-276846663;
    case "ERROR" :
        return /* ERROR */-250084440;
    case "FAILURE" :
        return /* FAILURE */382616618;
    case "INACTIVE" :
        return /* INACTIVE */-1011505301;
    case "IN_PROGRESS" :
        return /* IN_PROGRESS */-43804025;
    case "PENDING" :
        return /* PENDING */734030903;
    case "QUEUED" :
        return /* QUEUED */30670259;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$67(t) {
  if (t >= -250084440) {
    if (t !== -43804025) {
      if (t >= 382616618) {
        if (t >= 734030903) {
          return "PENDING";
        } else {
          return "FAILURE";
        }
      } else if (t >= 30670259) {
        return "QUEUED";
      } else {
        return "ERROR";
      }
    } else {
      return "IN_PROGRESS";
    }
  } else if (t !== -926356026) {
    if (t >= -389473612) {
      if (t >= -276846663) {
        return "DESTROYED";
      } else {
        return "ABANDONED";
      }
    } else if (t >= -769308010) {
      return "";
    } else {
      return "INACTIVE";
    }
  } else {
    return "ACTIVE";
  }
}

var Enum_DeploymentState = {
  unwrap: unwrap$67,
  wrap: wrap$67
};

function unwrap$68(wrapped) {
  switch (wrapped) {
    case "BAD_CERT" :
        return /* BAD_CERT */-574085378;
    case "BAD_EMAIL" :
        return /* BAD_EMAIL */-580655710;
    case "EXPIRED_KEY" :
        return /* EXPIRED_KEY */-551336827;
    case "GPGVERIFY_ERROR" :
        return /* GPGVERIFY_ERROR */386532896;
    case "GPGVERIFY_UNAVAILABLE" :
        return /* GPGVERIFY_UNAVAILABLE */601168040;
    case "INVALID" :
        return /* INVALID */991669975;
    case "MALFORMED_SIG" :
        return /* MALFORMED_SIG */-328484723;
    case "NOT_SIGNING_KEY" :
        return /* NOT_SIGNING_KEY */-118310631;
    case "NO_USER" :
        return /* NO_USER */758851145;
    case "OCSP_ERROR" :
        return /* OCSP_ERROR */54059098;
    case "OCSP_PENDING" :
        return /* OCSP_PENDING */760699241;
    case "OCSP_REVOKED" :
        return /* OCSP_REVOKED */587055216;
    case "UNKNOWN_KEY" :
        return /* UNKNOWN_KEY */-518758678;
    case "UNKNOWN_SIG_TYPE" :
        return /* UNKNOWN_SIG_TYPE */-97446723;
    case "UNSIGNED" :
        return /* UNSIGNED */273871093;
    case "UNVERIFIED_EMAIL" :
        return /* UNVERIFIED_EMAIL */614871134;
    case "VALID" :
        return /* VALID */799452380;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$68(t) {
  if (t >= 273871093) {
    if (t >= 614871134) {
      if (t !== 758851145) {
        if (t >= 799452380) {
          if (t >= 991669975) {
            return "INVALID";
          } else {
            return "VALID";
          }
        } else if (t >= 760699241) {
          return "OCSP_PENDING";
        } else {
          return "UNVERIFIED_EMAIL";
        }
      } else {
        return "NO_USER";
      }
    } else if (t >= 587055216) {
      if (t >= 601168040) {
        return "GPGVERIFY_UNAVAILABLE";
      } else {
        return "OCSP_REVOKED";
      }
    } else if (t >= 386532896) {
      return "GPGVERIFY_ERROR";
    } else {
      return "UNSIGNED";
    }
  } else if (t >= -518758678) {
    if (t !== -328484723) {
      if (t >= -97446723) {
        if (t >= 54059098) {
          return "OCSP_ERROR";
        } else {
          return "UNKNOWN_SIG_TYPE";
        }
      } else if (t >= -118310631) {
        return "NOT_SIGNING_KEY";
      } else {
        return "UNKNOWN_KEY";
      }
    } else {
      return "MALFORMED_SIG";
    }
  } else if (t >= -574085378) {
    if (t >= -551336827) {
      return "EXPIRED_KEY";
    } else {
      return "BAD_CERT";
    }
  } else if (t >= -580655710) {
    return "BAD_EMAIL";
  } else {
    return "";
  }
}

var Enum_GitSignatureState = {
  unwrap: unwrap$68,
  wrap: wrap$68
};

function unwrap$69(wrapped) {
  switch (wrapped) {
    case "ERROR" :
        return /* ERROR */-250084440;
    case "EXPECTED" :
        return /* EXPECTED */431341176;
    case "FAILURE" :
        return /* FAILURE */382616618;
    case "PENDING" :
        return /* PENDING */734030903;
    case "SUCCESS" :
        return /* SUCCESS */941750691;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$69(t) {
  if (t >= 382616618) {
    if (t >= 734030903) {
      if (t >= 941750691) {
        return "SUCCESS";
      } else {
        return "PENDING";
      }
    } else if (t >= 431341176) {
      return "EXPECTED";
    } else {
      return "FAILURE";
    }
  } else if (t >= -250084440) {
    return "ERROR";
  } else {
    return "";
  }
}

var Enum_StatusState = {
  unwrap: unwrap$69,
  wrap: wrap$69
};

function unwrap$70(wrapped) {
  if (wrapped === "SIZE") {
    return /* SIZE */924084417;
  } else {
    return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$70(t) {
  if (t >= 924084417) {
    return "SIZE";
  } else {
    return "";
  }
}

var Enum_LanguageOrderField = {
  unwrap: unwrap$70,
  wrap: wrap$70
};

function unwrap$71(wrapped) {
  switch (wrapped) {
    case "CLOSED" :
        return /* CLOSED */-1059826260;
    case "OPEN" :
        return /* OPEN */880069578;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$71(t) {
  if (t !== -769308010) {
    if (t >= 880069578) {
      return "OPEN";
    } else {
      return "CLOSED";
    }
  } else {
    return "";
  }
}

var Enum_MilestoneState = {
  unwrap: unwrap$71,
  wrap: wrap$71
};

function unwrap$72(wrapped) {
  switch (wrapped) {
    case "CREATED_AT" :
        return /* CREATED_AT */-600305078;
    case "DUE_DATE" :
        return /* DUE_DATE */-153362951;
    case "NUMBER" :
        return /* NUMBER */-738381111;
    case "UPDATED_AT" :
        return /* UPDATED_AT */39795671;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$72(t) {
  if (t !== -738381111) {
    if (t >= -153362951) {
      if (t >= 39795671) {
        return "UPDATED_AT";
      } else {
        return "DUE_DATE";
      }
    } else if (t >= -600305078) {
      return "CREATED_AT";
    } else {
      return "";
    }
  } else {
    return "NUMBER";
  }
}

var Enum_MilestoneOrderField = {
  unwrap: unwrap$72,
  wrap: wrap$72
};

function unwrap$73(wrapped) {
  switch (wrapped) {
    case "ALPHABETICAL" :
        return /* ALPHABETICAL */-1042184840;
    case "TAG_COMMIT_DATE" :
        return /* TAG_COMMIT_DATE */415724017;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$73(t) {
  if (t !== -769308010) {
    if (t >= 415724017) {
      return "TAG_COMMIT_DATE";
    } else {
      return "ALPHABETICAL";
    }
  } else {
    return "";
  }
}

var Enum_RefOrderField = {
  unwrap: unwrap$73,
  wrap: wrap$73
};

function unwrap$74(wrapped) {
  switch (wrapped) {
    case "CREATED_AT" :
        return /* CREATED_AT */-600305078;
    case "NAME" :
        return /* NAME */868235851;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$74(t) {
  if (t !== -600305078) {
    if (t >= 868235851) {
      return "NAME";
    } else {
      return "";
    }
  } else {
    return "CREATED_AT";
  }
}

var Enum_ReleaseOrderField = {
  unwrap: unwrap$74,
  wrap: wrap$74
};

function unwrap$75(wrapped) {
  switch (wrapped) {
    case "CRITICAL" :
        return /* CRITICAL */138255519;
    case "HIGH" :
        return /* HIGH */802094946;
    case "LOW" :
        return /* LOW */3797108;
    case "MODERATE" :
        return /* MODERATE */714843075;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$75(t) {
  if (t !== 3797108) {
    if (t >= 714843075) {
      if (t >= 802094946) {
        return "HIGH";
      } else {
        return "MODERATE";
      }
    } else if (t >= 138255519) {
      return "CRITICAL";
    } else {
      return "";
    }
  } else {
    return "LOW";
  }
}

var Enum_SecurityAdvisorySeverity = {
  unwrap: unwrap$75,
  wrap: wrap$75
};

function unwrap$76(wrapped) {
  if (wrapped === "UPDATED_AT") {
    return /* UPDATED_AT */39795671;
  } else {
    return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$76(t) {
  if (t >= 39795671) {
    return "UPDATED_AT";
  } else {
    return "";
  }
}

var Enum_SecurityVulnerabilityOrderField = {
  unwrap: unwrap$76,
  wrap: wrap$76
};

function unwrap$77(wrapped) {
  switch (wrapped) {
    case "COMPOSER" :
        return /* COMPOSER */-615266528;
    case "MAVEN" :
        return /* MAVEN */18024299;
    case "NPM" :
        return /* NPM */3896779;
    case "NUGET" :
        return /* NUGET */564559503;
    case "PIP" :
        return /* PIP */3994679;
    case "RUBYGEMS" :
        return /* RUBYGEMS */-232574370;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$77(t) {
  if (t >= 3896779) {
    if (t >= 18024299) {
      if (t >= 564559503) {
        return "NUGET";
      } else {
        return "MAVEN";
      }
    } else if (t >= 3994679) {
      return "PIP";
    } else {
      return "NPM";
    }
  } else if (t !== -615266528) {
    if (t >= -232574370) {
      return "RUBYGEMS";
    } else {
      return "";
    }
  } else {
    return "COMPOSER";
  }
}

var Enum_SecurityAdvisoryEcosystem = {
  unwrap: unwrap$77,
  wrap: wrap$77
};

function unwrap$78(wrapped) {
  switch (wrapped) {
    case "ONE_DAY" :
        return /* ONE_DAY */-23402365;
    case "ONE_MONTH" :
        return /* ONE_MONTH */-1050905305;
    case "ONE_WEEK" :
        return /* ONE_WEEK */-712863795;
    case "PERMANENT" :
        return /* PERMANENT */305356302;
    case "THREE_DAYS" :
        return /* THREE_DAYS */-358903432;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$78(t) {
  if (t >= -712863795) {
    if (t >= -23402365) {
      if (t >= 305356302) {
        return "PERMANENT";
      } else {
        return "ONE_DAY";
      }
    } else if (t >= -358903432) {
      return "THREE_DAYS";
    } else {
      return "ONE_WEEK";
    }
  } else if (t >= -769308010) {
    return "";
  } else {
    return "ONE_MONTH";
  }
}

var Enum_UserBlockDuration = {
  unwrap: unwrap$78,
  wrap: wrap$78
};

function unwrap$79(wrapped) {
  switch (wrapped) {
    case "ADDED_TO_PROJECT_EVENT" :
        return /* ADDED_TO_PROJECT_EVENT */-989665425;
    case "ASSIGNED_EVENT" :
        return /* ASSIGNED_EVENT */470011401;
    case "CLOSED_EVENT" :
        return /* CLOSED_EVENT */407381479;
    case "COMMENT_DELETED_EVENT" :
        return /* COMMENT_DELETED_EVENT */908075124;
    case "CONVERTED_NOTE_TO_ISSUE_EVENT" :
        return /* CONVERTED_NOTE_TO_ISSUE_EVENT */101776784;
    case "CROSS_REFERENCED_EVENT" :
        return /* CROSS_REFERENCED_EVENT */253854003;
    case "DEMILESTONED_EVENT" :
        return /* DEMILESTONED_EVENT */-934159696;
    case "ISSUE_COMMENT" :
        return /* ISSUE_COMMENT */-338109319;
    case "LABELED_EVENT" :
        return /* LABELED_EVENT */-105132370;
    case "LOCKED_EVENT" :
        return /* LOCKED_EVENT */-812295227;
    case "MARKED_AS_DUPLICATE_EVENT" :
        return /* MARKED_AS_DUPLICATE_EVENT */435148876;
    case "MENTIONED_EVENT" :
        return /* MENTIONED_EVENT */-575086172;
    case "MILESTONED_EVENT" :
        return /* MILESTONED_EVENT */437177647;
    case "MOVED_COLUMNS_IN_PROJECT_EVENT" :
        return /* MOVED_COLUMNS_IN_PROJECT_EVENT */-163082360;
    case "PINNED_EVENT" :
        return /* PINNED_EVENT */224653395;
    case "REFERENCED_EVENT" :
        return /* REFERENCED_EVENT */-91261388;
    case "REMOVED_FROM_PROJECT_EVENT" :
        return /* REMOVED_FROM_PROJECT_EVENT */877888126;
    case "RENAMED_TITLE_EVENT" :
        return /* RENAMED_TITLE_EVENT */931189946;
    case "REOPENED_EVENT" :
        return /* REOPENED_EVENT */931250903;
    case "SUBSCRIBED_EVENT" :
        return /* SUBSCRIBED_EVENT */-201756523;
    case "TRANSFERRED_EVENT" :
        return /* TRANSFERRED_EVENT */-857130335;
    case "UNASSIGNED_EVENT" :
        return /* UNASSIGNED_EVENT */598483490;
    case "UNLABELED_EVENT" :
        return /* UNLABELED_EVENT */-1038663499;
    case "UNLOCKED_EVENT" :
        return /* UNLOCKED_EVENT */868763550;
    case "UNPINNED_EVENT" :
        return /* UNPINNED_EVENT */-241771476;
    case "UNSUBSCRIBED_EVENT" :
        return /* UNSUBSCRIBED_EVENT */-177095442;
    case "USER_BLOCKED_EVENT" :
        return /* USER_BLOCKED_EVENT */39276243;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$79(t) {
  if (t >= 39276243) {
    if (t >= 470011401) {
      if (t >= 877888126) {
        if (t >= 931189946) {
          if (t >= 931250903) {
            return "REOPENED_EVENT";
          } else {
            return "RENAMED_TITLE_EVENT";
          }
        } else if (t >= 908075124) {
          return "COMMENT_DELETED_EVENT";
        } else {
          return "REMOVED_FROM_PROJECT_EVENT";
        }
      } else if (t !== 598483490) {
        if (t >= 868763550) {
          return "UNLOCKED_EVENT";
        } else {
          return "ASSIGNED_EVENT";
        }
      } else {
        return "UNASSIGNED_EVENT";
      }
    } else if (t >= 253854003) {
      if (t >= 435148876) {
        if (t >= 437177647) {
          return "MILESTONED_EVENT";
        } else {
          return "MARKED_AS_DUPLICATE_EVENT";
        }
      } else if (t >= 407381479) {
        return "CLOSED_EVENT";
      } else {
        return "CROSS_REFERENCED_EVENT";
      }
    } else if (t !== 101776784) {
      if (t >= 224653395) {
        return "PINNED_EVENT";
      } else {
        return "USER_BLOCKED_EVENT";
      }
    } else {
      return "CONVERTED_NOTE_TO_ISSUE_EVENT";
    }
  } else if (t >= -338109319) {
    if (t >= -177095442) {
      if (t >= -105132370) {
        if (t >= -91261388) {
          return "REFERENCED_EVENT";
        } else {
          return "LABELED_EVENT";
        }
      } else if (t >= -163082360) {
        return "MOVED_COLUMNS_IN_PROJECT_EVENT";
      } else {
        return "UNSUBSCRIBED_EVENT";
      }
    } else if (t !== -241771476) {
      if (t >= -201756523) {
        return "SUBSCRIBED_EVENT";
      } else {
        return "ISSUE_COMMENT";
      }
    } else {
      return "UNPINNED_EVENT";
    }
  } else if (t >= -857130335) {
    if (t >= -769308010) {
      if (t >= -575086172) {
        return "MENTIONED_EVENT";
      } else {
        return "";
      }
    } else if (t >= -812295227) {
      return "LOCKED_EVENT";
    } else {
      return "TRANSFERRED_EVENT";
    }
  } else if (t !== -989665425) {
    if (t >= -934159696) {
      return "DEMILESTONED_EVENT";
    } else {
      return "UNLABELED_EVENT";
    }
  } else {
    return "ADDED_TO_PROJECT_EVENT";
  }
}

var Enum_IssueTimelineItemsItemType = {
  unwrap: unwrap$79,
  wrap: wrap$79
};

function unwrap$80(wrapped) {
  switch (wrapped) {
    case "CONFLICTING" :
        return /* CONFLICTING */-829600336;
    case "MERGEABLE" :
        return /* MERGEABLE */-130335694;
    case "UNKNOWN" :
        return /* UNKNOWN */-514918550;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$80(t) {
  if (t >= -514918550) {
    if (t >= -130335694) {
      return "MERGEABLE";
    } else {
      return "UNKNOWN";
    }
  } else if (t >= -769308010) {
    return "";
  } else {
    return "CONFLICTING";
  }
}

var Enum_MergeableState = {
  unwrap: unwrap$80,
  wrap: wrap$80
};

function unwrap$81(wrapped) {
  switch (wrapped) {
    case "APPROVED" :
        return /* APPROVED */-328868233;
    case "CHANGES_REQUESTED" :
        return /* CHANGES_REQUESTED */924349362;
    case "COMMENTED" :
        return /* COMMENTED */363059294;
    case "DISMISSED" :
        return /* DISMISSED */-607191543;
    case "PENDING" :
        return /* PENDING */734030903;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$81(t) {
  if (t >= -328868233) {
    if (t >= 734030903) {
      if (t >= 924349362) {
        return "CHANGES_REQUESTED";
      } else {
        return "PENDING";
      }
    } else if (t >= 363059294) {
      return "COMMENTED";
    } else {
      return "APPROVED";
    }
  } else if (t >= -607191543) {
    return "DISMISSED";
  } else {
    return "";
  }
}

var Enum_PullRequestReviewState = {
  unwrap: unwrap$81,
  wrap: wrap$81
};

function unwrap$82(wrapped) {
  switch (wrapped) {
    case "PENDING" :
        return /* PENDING */734030903;
    case "SUBMITTED" :
        return /* SUBMITTED */604935323;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$82(t) {
  if (t !== 604935323) {
    if (t >= 734030903) {
      return "PENDING";
    } else {
      return "";
    }
  } else {
    return "SUBMITTED";
  }
}

var Enum_PullRequestReviewCommentState = {
  unwrap: unwrap$82,
  wrap: wrap$82
};

function unwrap$83(wrapped) {
  switch (wrapped) {
    case "ADDED_TO_PROJECT_EVENT" :
        return /* ADDED_TO_PROJECT_EVENT */-989665425;
    case "ASSIGNED_EVENT" :
        return /* ASSIGNED_EVENT */470011401;
    case "BASE_REF_CHANGED_EVENT" :
        return /* BASE_REF_CHANGED_EVENT */761383125;
    case "BASE_REF_FORCE_PUSHED_EVENT" :
        return /* BASE_REF_FORCE_PUSHED_EVENT */763997026;
    case "CLOSED_EVENT" :
        return /* CLOSED_EVENT */407381479;
    case "COMMENT_DELETED_EVENT" :
        return /* COMMENT_DELETED_EVENT */908075124;
    case "CONVERTED_NOTE_TO_ISSUE_EVENT" :
        return /* CONVERTED_NOTE_TO_ISSUE_EVENT */101776784;
    case "CROSS_REFERENCED_EVENT" :
        return /* CROSS_REFERENCED_EVENT */253854003;
    case "DEMILESTONED_EVENT" :
        return /* DEMILESTONED_EVENT */-934159696;
    case "DEPLOYED_EVENT" :
        return /* DEPLOYED_EVENT */-476764671;
    case "DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT" :
        return /* DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT */-193860215;
    case "HEAD_REF_DELETED_EVENT" :
        return /* HEAD_REF_DELETED_EVENT */-747018167;
    case "HEAD_REF_FORCE_PUSHED_EVENT" :
        return /* HEAD_REF_FORCE_PUSHED_EVENT */-179786701;
    case "HEAD_REF_RESTORED_EVENT" :
        return /* HEAD_REF_RESTORED_EVENT */661316828;
    case "ISSUE_COMMENT" :
        return /* ISSUE_COMMENT */-338109319;
    case "LABELED_EVENT" :
        return /* LABELED_EVENT */-105132370;
    case "LOCKED_EVENT" :
        return /* LOCKED_EVENT */-812295227;
    case "MARKED_AS_DUPLICATE_EVENT" :
        return /* MARKED_AS_DUPLICATE_EVENT */435148876;
    case "MENTIONED_EVENT" :
        return /* MENTIONED_EVENT */-575086172;
    case "MERGED_EVENT" :
        return /* MERGED_EVENT */20708071;
    case "MILESTONED_EVENT" :
        return /* MILESTONED_EVENT */437177647;
    case "MOVED_COLUMNS_IN_PROJECT_EVENT" :
        return /* MOVED_COLUMNS_IN_PROJECT_EVENT */-163082360;
    case "PINNED_EVENT" :
        return /* PINNED_EVENT */224653395;
    case "PULL_REQUEST_COMMIT" :
        return /* PULL_REQUEST_COMMIT */540166337;
    case "PULL_REQUEST_COMMIT_COMMENT_THREAD" :
        return /* PULL_REQUEST_COMMIT_COMMENT_THREAD */-110313208;
    case "PULL_REQUEST_REVIEW" :
        return /* PULL_REQUEST_REVIEW */-478493598;
    case "PULL_REQUEST_REVIEW_THREAD" :
        return /* PULL_REQUEST_REVIEW_THREAD */338207815;
    case "PULL_REQUEST_REVISION_MARKER" :
        return /* PULL_REQUEST_REVISION_MARKER */-420589868;
    case "READY_FOR_REVIEW_EVENT" :
        return /* READY_FOR_REVIEW_EVENT */-831975963;
    case "REFERENCED_EVENT" :
        return /* REFERENCED_EVENT */-91261388;
    case "REMOVED_FROM_PROJECT_EVENT" :
        return /* REMOVED_FROM_PROJECT_EVENT */877888126;
    case "RENAMED_TITLE_EVENT" :
        return /* RENAMED_TITLE_EVENT */931189946;
    case "REOPENED_EVENT" :
        return /* REOPENED_EVENT */931250903;
    case "REVIEW_DISMISSED_EVENT" :
        return /* REVIEW_DISMISSED_EVENT */-679969763;
    case "REVIEW_REQUESTED_EVENT" :
        return /* REVIEW_REQUESTED_EVENT */-998762206;
    case "REVIEW_REQUEST_REMOVED_EVENT" :
        return /* REVIEW_REQUEST_REMOVED_EVENT */269071684;
    case "SUBSCRIBED_EVENT" :
        return /* SUBSCRIBED_EVENT */-201756523;
    case "TRANSFERRED_EVENT" :
        return /* TRANSFERRED_EVENT */-857130335;
    case "UNASSIGNED_EVENT" :
        return /* UNASSIGNED_EVENT */598483490;
    case "UNLABELED_EVENT" :
        return /* UNLABELED_EVENT */-1038663499;
    case "UNLOCKED_EVENT" :
        return /* UNLOCKED_EVENT */868763550;
    case "UNPINNED_EVENT" :
        return /* UNPINNED_EVENT */-241771476;
    case "UNSUBSCRIBED_EVENT" :
        return /* UNSUBSCRIBED_EVENT */-177095442;
    case "USER_BLOCKED_EVENT" :
        return /* USER_BLOCKED_EVENT */39276243;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$83(t) {
  if (t >= -105132370) {
    if (t >= 437177647) {
      if (t >= 763997026) {
        if (t >= 877888126) {
          if (t >= 931189946) {
            if (t >= 931250903) {
              return "REOPENED_EVENT";
            } else {
              return "RENAMED_TITLE_EVENT";
            }
          } else if (t >= 908075124) {
            return "COMMENT_DELETED_EVENT";
          } else {
            return "REMOVED_FROM_PROJECT_EVENT";
          }
        } else if (t >= 868763550) {
          return "UNLOCKED_EVENT";
        } else {
          return "BASE_REF_FORCE_PUSHED_EVENT";
        }
      } else if (t >= 540166337) {
        if (t >= 661316828) {
          if (t >= 761383125) {
            return "BASE_REF_CHANGED_EVENT";
          } else {
            return "HEAD_REF_RESTORED_EVENT";
          }
        } else if (t >= 598483490) {
          return "UNASSIGNED_EVENT";
        } else {
          return "PULL_REQUEST_COMMIT";
        }
      } else if (t >= 470011401) {
        return "ASSIGNED_EVENT";
      } else {
        return "MILESTONED_EVENT";
      }
    } else if (t >= 224653395) {
      if (t >= 269071684) {
        if (t >= 407381479) {
          if (t >= 435148876) {
            return "MARKED_AS_DUPLICATE_EVENT";
          } else {
            return "CLOSED_EVENT";
          }
        } else if (t >= 338207815) {
          return "PULL_REQUEST_REVIEW_THREAD";
        } else {
          return "REVIEW_REQUEST_REMOVED_EVENT";
        }
      } else if (t >= 253854003) {
        return "CROSS_REFERENCED_EVENT";
      } else {
        return "PINNED_EVENT";
      }
    } else if (t !== -91261388) {
      if (t >= 39276243) {
        if (t >= 101776784) {
          return "CONVERTED_NOTE_TO_ISSUE_EVENT";
        } else {
          return "USER_BLOCKED_EVENT";
        }
      } else if (t >= 20708071) {
        return "MERGED_EVENT";
      } else {
        return "LABELED_EVENT";
      }
    } else {
      return "REFERENCED_EVENT";
    }
  } else if (t >= -478493598) {
    if (t >= -201756523) {
      if (t >= -179786701) {
        if (t >= -163082360) {
          if (t >= -110313208) {
            return "PULL_REQUEST_COMMIT_COMMENT_THREAD";
          } else {
            return "MOVED_COLUMNS_IN_PROJECT_EVENT";
          }
        } else if (t >= -177095442) {
          return "UNSUBSCRIBED_EVENT";
        } else {
          return "HEAD_REF_FORCE_PUSHED_EVENT";
        }
      } else if (t >= -193860215) {
        return "DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT";
      } else {
        return "SUBSCRIBED_EVENT";
      }
    } else if (t !== -476764671) {
      if (t >= -338109319) {
        if (t >= -241771476) {
          return "UNPINNED_EVENT";
        } else {
          return "ISSUE_COMMENT";
        }
      } else if (t >= -420589868) {
        return "PULL_REQUEST_REVISION_MARKER";
      } else {
        return "PULL_REQUEST_REVIEW";
      }
    } else {
      return "DEPLOYED_EVENT";
    }
  } else if (t >= -831975963) {
    if (t >= -769308010) {
      if (t >= -679969763) {
        if (t >= -575086172) {
          return "MENTIONED_EVENT";
        } else {
          return "REVIEW_DISMISSED_EVENT";
        }
      } else if (t >= -747018167) {
        return "HEAD_REF_DELETED_EVENT";
      } else {
        return "";
      }
    } else if (t >= -812295227) {
      return "LOCKED_EVENT";
    } else {
      return "READY_FOR_REVIEW_EVENT";
    }
  } else if (t !== -998762206) {
    if (t >= -934159696) {
      if (t >= -857130335) {
        return "TRANSFERRED_EVENT";
      } else {
        return "DEMILESTONED_EVENT";
      }
    } else if (t >= -989665425) {
      return "ADDED_TO_PROJECT_EVENT";
    } else {
      return "UNLABELED_EVENT";
    }
  } else {
    return "REVIEW_REQUESTED_EVENT";
  }
}

var Enum_PullRequestTimelineItemsItemType = {
  unwrap: unwrap$83,
  wrap: wrap$83
};

function unwrap$84(wrapped) {
  switch (wrapped) {
    case "COMMIT_COUNT" :
        return /* COMMIT_COUNT */-77221081;
    case "OCCURRED_AT" :
        return /* OCCURRED_AT */-837595059;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$84(t) {
  if (t !== -769308010) {
    if (t >= -77221081) {
      return "COMMIT_COUNT";
    } else {
      return "OCCURRED_AT";
    }
  } else {
    return "";
  }
}

var Enum_CommitContributionOrderField = {
  unwrap: unwrap$84,
  wrap: wrap$84
};

function unwrap$85(wrapped) {
  if (wrapped === "OCCURRED_AT") {
    return /* OCCURRED_AT */-837595059;
  } else {
    return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$85(t) {
  if (t >= -769308010) {
    return "";
  } else {
    return "OCCURRED_AT";
  }
}

var Enum_ContributionOrderField = {
  unwrap: unwrap$85,
  wrap: wrap$85
};

function unwrap$86(wrapped) {
  switch (wrapped) {
    case "ALL" :
        return /* ALL */3249409;
    case "PUBLIC" :
        return /* PUBLIC */427175081;
    case "SECRET" :
        return /* SECRET */382515824;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$86(t) {
  if (t >= 382515824) {
    if (t >= 427175081) {
      return "PUBLIC";
    } else {
      return "SECRET";
    }
  } else if (t >= 3249409) {
    return "ALL";
  } else {
    return "";
  }
}

var Enum_GistPrivacy = {
  unwrap: unwrap$86,
  wrap: wrap$86
};

function unwrap$87(wrapped) {
  switch (wrapped) {
    case "COMMIT" :
        return /* COMMIT */-105833481;
    case "ISSUE" :
        return /* ISSUE */1063015353;
    case "PULL_REQUEST" :
        return /* PULL_REQUEST */159624565;
    case "PULL_REQUEST_REVIEW" :
        return /* PULL_REQUEST_REVIEW */-478493598;
    case "REPOSITORY" :
        return /* REPOSITORY */393245578;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$87(t) {
  if (t >= -105833481) {
    if (t >= 393245578) {
      if (t >= 1063015353) {
        return "ISSUE";
      } else {
        return "REPOSITORY";
      }
    } else if (t >= 159624565) {
      return "PULL_REQUEST";
    } else {
      return "COMMIT";
    }
  } else if (t >= -478493598) {
    return "PULL_REQUEST_REVIEW";
  } else {
    return "";
  }
}

var Enum_RepositoryContributionType = {
  unwrap: unwrap$87,
  wrap: wrap$87
};

function unwrap$88(wrapped) {
  if (wrapped === "UPDATED_AT") {
    return /* UPDATED_AT */39795671;
  } else {
    return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$88(t) {
  if (t >= 39795671) {
    return "UPDATED_AT";
  } else {
    return "";
  }
}

var Enum_SavedReplyOrderField = {
  unwrap: unwrap$88,
  wrap: wrap$88
};

function unwrap$89(wrapped) {
  switch (wrapped) {
    case "CREATED_AT" :
        return /* CREATED_AT */-600305078;
    case "LOGIN" :
        return /* LOGIN */-152956599;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$89(t) {
  if (t !== -600305078) {
    if (t >= -152956599) {
      return "LOGIN";
    } else {
      return "";
    }
  } else {
    return "CREATED_AT";
  }
}

var Enum_OrganizationOrderField = {
  unwrap: unwrap$89,
  wrap: wrap$89
};

function unwrap$90(wrapped) {
  switch (wrapped) {
    case "BILLING_MANAGER" :
        return /* BILLING_MANAGER */-895173143;
    case "OWNER" :
        return /* OWNER */912576531;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$90(t) {
  if (t !== -769308010) {
    if (t >= 912576531) {
      return "OWNER";
    } else {
      return "BILLING_MANAGER";
    }
  } else {
    return "";
  }
}

var Enum_EnterpriseAdministratorRole = {
  unwrap: unwrap$90,
  wrap: wrap$90
};

function unwrap$91(wrapped) {
  switch (wrapped) {
    case "DISABLED" :
        return /* DISABLED */-712388228;
    case "ENABLED" :
        return /* ENABLED */-33236895;
    case "NO_POLICY" :
        return /* NO_POLICY */104779632;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$91(t) {
  if (t >= -33236895) {
    if (t >= 104779632) {
      return "NO_POLICY";
    } else {
      return "ENABLED";
    }
  } else if (t >= -712388228) {
    return "DISABLED";
  } else {
    return "";
  }
}

var Enum_EnterpriseEnabledDisabledSettingValue = {
  unwrap: unwrap$91,
  wrap: wrap$91
};

function unwrap$92(wrapped) {
  switch (wrapped) {
    case "ADMIN" :
        return /* ADMIN */439936111;
    case "NONE" :
        return /* NONE */868932280;
    case "NO_POLICY" :
        return /* NO_POLICY */104779632;
    case "READ" :
        return /* READ */912790358;
    case "WRITE" :
        return /* WRITE */-834165569;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$92(t) {
  if (t >= 104779632) {
    if (t >= 868932280) {
      if (t >= 912790358) {
        return "READ";
      } else {
        return "NONE";
      }
    } else if (t >= 439936111) {
      return "ADMIN";
    } else {
      return "NO_POLICY";
    }
  } else if (t >= -769308010) {
    return "";
  } else {
    return "WRITE";
  }
}

var Enum_EnterpriseDefaultRepositoryPermissionSettingValue = {
  unwrap: unwrap$92,
  wrap: wrap$92
};

function unwrap$93(wrapped) {
  switch (wrapped) {
    case "CREATED_AT" :
        return /* CREATED_AT */-600305078;
    case "CUSTOMER_NAME" :
        return /* CUSTOMER_NAME */679871244;
    case "HOST_NAME" :
        return /* HOST_NAME */-222829118;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$93(t) {
  if (t >= -222829118) {
    if (t >= 679871244) {
      return "CUSTOMER_NAME";
    } else {
      return "HOST_NAME";
    }
  } else if (t >= -600305078) {
    return "CREATED_AT";
  } else {
    return "";
  }
}

var Enum_EnterpriseServerInstallationOrderField = {
  unwrap: unwrap$93,
  wrap: wrap$93
};

function unwrap$94(wrapped) {
  switch (wrapped) {
    case "LOGIN" :
        return /* LOGIN */-152956599;
    case "REMOTE_CREATED_AT" :
        return /* REMOTE_CREATED_AT */-809256285;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$94(t) {
  if (t !== -769308010) {
    if (t >= -152956599) {
      return "LOGIN";
    } else {
      return "REMOTE_CREATED_AT";
    }
  } else {
    return "";
  }
}

var Enum_EnterpriseServerUserAccountOrderField = {
  unwrap: unwrap$94,
  wrap: wrap$94
};

function unwrap$95(wrapped) {
  if (wrapped === "EMAIL") {
    return /* EMAIL */-306379012;
  } else {
    return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$95(t) {
  if (t >= -306379012) {
    return "EMAIL";
  } else {
    return "";
  }
}

var Enum_EnterpriseServerUserAccountEmailOrderField = {
  unwrap: unwrap$95,
  wrap: wrap$95
};

function unwrap$96(wrapped) {
  if (wrapped === "CREATED_AT") {
    return /* CREATED_AT */-600305078;
  } else {
    return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$96(t) {
  if (t >= -600305078) {
    return "CREATED_AT";
  } else {
    return "";
  }
}

var Enum_EnterpriseServerUserAccountsUploadOrderField = {
  unwrap: unwrap$96,
  wrap: wrap$96
};

function unwrap$97(wrapped) {
  switch (wrapped) {
    case "FAILURE" :
        return /* FAILURE */382616618;
    case "PENDING" :
        return /* PENDING */734030903;
    case "SUCCESS" :
        return /* SUCCESS */941750691;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$97(t) {
  if (t >= 734030903) {
    if (t >= 941750691) {
      return "SUCCESS";
    } else {
      return "PENDING";
    }
  } else if (t >= 382616618) {
    return "FAILURE";
  } else {
    return "";
  }
}

var Enum_EnterpriseServerUserAccountsUploadSyncState = {
  unwrap: unwrap$97,
  wrap: wrap$97
};

function unwrap$98(wrapped) {
  switch (wrapped) {
    case "ALL" :
        return /* ALL */3249409;
    case "DISABLED" :
        return /* DISABLED */-712388228;
    case "NO_POLICY" :
        return /* NO_POLICY */104779632;
    case "PRIVATE" :
        return /* PRIVATE */155386083;
    case "PUBLIC" :
        return /* PUBLIC */427175081;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$98(t) {
  if (t >= 3249409) {
    if (t >= 155386083) {
      if (t >= 427175081) {
        return "PUBLIC";
      } else {
        return "PRIVATE";
      }
    } else if (t >= 104779632) {
      return "NO_POLICY";
    } else {
      return "ALL";
    }
  } else if (t >= -712388228) {
    return "DISABLED";
  } else {
    return "";
  }
}

var Enum_EnterpriseMembersCanCreateRepositoriesSettingValue = {
  unwrap: unwrap$98,
  wrap: wrap$98
};

function unwrap$99(wrapped) {
  switch (wrapped) {
    case "ALL" :
        return /* ALL */3249409;
    case "DISABLED" :
        return /* DISABLED */-712388228;
    case "PRIVATE" :
        return /* PRIVATE */155386083;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$99(t) {
  if (t >= 3249409) {
    if (t >= 155386083) {
      return "PRIVATE";
    } else {
      return "ALL";
    }
  } else if (t >= -712388228) {
    return "DISABLED";
  } else {
    return "";
  }
}

var Enum_OrganizationMembersCanCreateRepositoriesSettingValue = {
  unwrap: unwrap$99,
  wrap: wrap$99
};

function unwrap$100(wrapped) {
  switch (wrapped) {
    case "DISABLED" :
        return /* DISABLED */-712388228;
    case "ENABLED" :
        return /* ENABLED */-33236895;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$100(t) {
  if (t !== -712388228) {
    if (t >= -33236895) {
      return "ENABLED";
    } else {
      return "";
    }
  } else {
    return "DISABLED";
  }
}

var Enum_EnterpriseMembersCanMakePurchasesSettingValue = {
  unwrap: unwrap$100,
  wrap: wrap$100
};

function unwrap$101(wrapped) {
  switch (wrapped) {
    case "INTERNAL" :
        return /* INTERNAL */33290045;
    case "PRIVATE" :
        return /* PRIVATE */155386083;
    case "PUBLIC" :
        return /* PUBLIC */427175081;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$101(t) {
  if (t >= 155386083) {
    if (t >= 427175081) {
      return "PUBLIC";
    } else {
      return "PRIVATE";
    }
  } else if (t >= 33290045) {
    return "INTERNAL";
  } else {
    return "";
  }
}

var Enum_RepositoryVisibility = {
  unwrap: unwrap$101,
  wrap: wrap$101
};

function unwrap$102(wrapped) {
  if (wrapped === "CREATED_AT") {
    return /* CREATED_AT */-600305078;
  } else {
    return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$102(t) {
  if (t >= -600305078) {
    return "CREATED_AT";
  } else {
    return "";
  }
}

var Enum_EnterpriseAdministratorInvitationOrderField = {
  unwrap: unwrap$102,
  wrap: wrap$102
};

function unwrap$103(wrapped) {
  switch (wrapped) {
    case "CREATED_AT" :
        return /* CREATED_AT */-600305078;
    case "INVITEE_LOGIN" :
        return /* INVITEE_LOGIN */-703793178;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$103(t) {
  if (t !== -703793178) {
    if (t >= -600305078) {
      return "CREATED_AT";
    } else {
      return "";
    }
  } else {
    return "INVITEE_LOGIN";
  }
}

var Enum_RepositoryInvitationOrderField = {
  unwrap: unwrap$103,
  wrap: wrap$103
};

function unwrap$104(wrapped) {
  switch (wrapped) {
    case "SHA1" :
        return /* SHA1 */924029093;
    case "SHA256" :
        return /* SHA256 */-812272505;
    case "SHA384" :
        return /* SHA384 */-812222109;
    case "SHA512" :
        return /* SHA512 */-812124214;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$104(t) {
  if (t !== -812222109) {
    if (t >= -769308010) {
      if (t >= 924029093) {
        return "SHA1";
      } else {
        return "";
      }
    } else if (t >= -812124214) {
      return "SHA512";
    } else {
      return "SHA256";
    }
  } else {
    return "SHA384";
  }
}

var Enum_SamlDigestAlgorithm = {
  unwrap: unwrap$104,
  wrap: wrap$104
};

function unwrap$105(wrapped) {
  switch (wrapped) {
    case "RSA_SHA1" :
        return /* RSA_SHA1 */888483620;
    case "RSA_SHA256" :
        return /* RSA_SHA256 */1073426630;
    case "RSA_SHA384" :
        return /* RSA_SHA384 */1073477026;
    case "RSA_SHA512" :
        return /* RSA_SHA512 */1073574921;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$105(t) {
  if (t !== 888483620) {
    if (t >= 1073477026) {
      if (t >= 1073574921) {
        return "RSA_SHA512";
      } else {
        return "RSA_SHA384";
      }
    } else if (t >= 1073426630) {
      return "RSA_SHA256";
    } else {
      return "";
    }
  } else {
    return "RSA_SHA1";
  }
}

var Enum_SamlSignatureAlgorithm = {
  unwrap: unwrap$105,
  wrap: wrap$105
};

function unwrap$106(wrapped) {
  switch (wrapped) {
    case "CONFIGURED" :
        return /* CONFIGURED */36185022;
    case "ENFORCED" :
        return /* ENFORCED */-970155710;
    case "UNCONFIGURED" :
        return /* UNCONFIGURED */444348247;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$106(t) {
  if (t >= 36185022) {
    if (t >= 444348247) {
      return "UNCONFIGURED";
    } else {
      return "CONFIGURED";
    }
  } else if (t >= -769308010) {
    return "";
  } else {
    return "ENFORCED";
  }
}

var Enum_IdentityProviderConfigurationState = {
  unwrap: unwrap$106,
  wrap: wrap$106
};

function unwrap$107(wrapped) {
  switch (wrapped) {
    case "ENABLED" :
        return /* ENABLED */-33236895;
    case "NO_POLICY" :
        return /* NO_POLICY */104779632;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$107(t) {
  if (t !== -33236895) {
    if (t >= 104779632) {
      return "NO_POLICY";
    } else {
      return "";
    }
  } else {
    return "ENABLED";
  }
}

var Enum_EnterpriseEnabledSettingValue = {
  unwrap: unwrap$107,
  wrap: wrap$107
};

function unwrap$108(wrapped) {
  switch (wrapped) {
    case "ISSUE" :
        return /* ISSUE */1063015353;
    case "REPOSITORY" :
        return /* REPOSITORY */393245578;
    case "USER" :
        return /* USER */946756171;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$108(t) {
  if (t >= 946756171) {
    if (t >= 1063015353) {
      return "ISSUE";
    } else {
      return "USER";
    }
  } else if (t >= 393245578) {
    return "REPOSITORY";
  } else {
    return "";
  }
}

var Enum_SearchType = {
  unwrap: unwrap$108,
  wrap: wrap$108
};

function unwrap$109(wrapped) {
  switch (wrapped) {
    case "PUBLISHED_AT" :
        return /* PUBLISHED_AT */83152964;
    case "UPDATED_AT" :
        return /* UPDATED_AT */39795671;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$109(t) {
  if (t !== 39795671) {
    if (t >= 83152964) {
      return "PUBLISHED_AT";
    } else {
      return "";
    }
  } else {
    return "UPDATED_AT";
  }
}

var Enum_SecurityAdvisoryOrderField = {
  unwrap: unwrap$109,
  wrap: wrap$109
};

function unwrap$110(wrapped) {
  switch (wrapped) {
    case "CVE" :
        return /* CVE */3351090;
    case "GHSA" :
        return /* GHSA */790958319;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$110(t) {
  if (t !== 3351090) {
    if (t >= 790958319) {
      return "GHSA";
    } else {
      return "";
    }
  } else {
    return "CVE";
  }
}

var Enum_SecurityAdvisoryIdentifierType = {
  unwrap: unwrap$110,
  wrap: wrap$110
};

function unwrap$111(wrapped) {
  switch (wrapped) {
    case "APPROVE" :
        return /* APPROVE */-771872467;
    case "COMMENT" :
        return /* COMMENT */21253695;
    case "DISMISS" :
        return /* DISMISS */958407466;
    case "REQUEST_CHANGES" :
        return /* REQUEST_CHANGES */-378611565;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$111(t) {
  if (t !== -769308010) {
    if (t >= 21253695) {
      if (t >= 958407466) {
        return "DISMISS";
      } else {
        return "COMMENT";
      }
    } else if (t >= -378611565) {
      return "REQUEST_CHANGES";
    } else {
      return "APPROVE";
    }
  } else {
    return "";
  }
}

var Enum_PullRequestReviewEvent = {
  unwrap: unwrap$111,
  wrap: wrap$111
};

function unwrap$112(wrapped) {
  switch (wrapped) {
    case "AUTOMATED_KANBAN_V2" :
        return /* AUTOMATED_KANBAN_V2 */-972329035;
    case "AUTOMATED_REVIEWS_KANBAN" :
        return /* AUTOMATED_REVIEWS_KANBAN */1053632906;
    case "BASIC_KANBAN" :
        return /* BASIC_KANBAN */789246856;
    case "BUG_TRIAGE" :
        return /* BUG_TRIAGE */-434667137;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$112(t) {
  if (t !== -769308010) {
    if (t >= 789246856) {
      if (t >= 1053632906) {
        return "AUTOMATED_REVIEWS_KANBAN";
      } else {
        return "BASIC_KANBAN";
      }
    } else if (t >= -434667137) {
      return "BUG_TRIAGE";
    } else {
      return "AUTOMATED_KANBAN_V2";
    }
  } else {
    return "";
  }
}

var Enum_ProjectTemplate = {
  unwrap: unwrap$112,
  wrap: wrap$112
};

function unwrap$113(wrapped) {
  switch (wrapped) {
    case "NOT_RELEVANT" :
        return /* NOT_RELEVANT */188530473;
    case "PERSONAL_PREFERENCE" :
        return /* PERSONAL_PREFERENCE */-724359494;
    case "TOO_GENERAL" :
        return /* TOO_GENERAL */677195517;
    case "TOO_SPECIFIC" :
        return /* TOO_SPECIFIC */-620570851;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$113(t) {
  if (t !== -724359494) {
    if (t >= 188530473) {
      if (t >= 677195517) {
        return "TOO_GENERAL";
      } else {
        return "NOT_RELEVANT";
      }
    } else if (t >= -620570851) {
      return "TOO_SPECIFIC";
    } else {
      return "";
    }
  } else {
    return "PERSONAL_PREFERENCE";
  }
}

var Enum_TopicSuggestionDeclineReason = {
  unwrap: unwrap$113,
  wrap: wrap$113
};

function unwrap$114(wrapped) {
  switch (wrapped) {
    case "MERGE" :
        return /* MERGE */62184088;
    case "REBASE" :
        return /* REBASE */800804164;
    case "SQUASH" :
        return /* SQUASH */192195967;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$114(t) {
  if (t >= 192195967) {
    if (t >= 800804164) {
      return "REBASE";
    } else {
      return "SQUASH";
    }
  } else if (t >= 62184088) {
    return "MERGE";
  } else {
    return "";
  }
}

var Enum_PullRequestMergeMethod = {
  unwrap: unwrap$114,
  wrap: wrap$114
};

function unwrap$115(wrapped) {
  switch (wrapped) {
    case "ALL_ACTIONS" :
        return /* ALL_ACTIONS */251277151;
    case "DISABLED" :
        return /* DISABLED */-712388228;
    case "LOCAL_ACTIONS_ONLY" :
        return /* LOCAL_ACTIONS_ONLY */379604738;
    case "NO_POLICY" :
        return /* NO_POLICY */104779632;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$115(t) {
  if (t !== -712388228) {
    if (t >= 251277151) {
      if (t >= 379604738) {
        return "LOCAL_ACTIONS_ONLY";
      } else {
        return "ALL_ACTIONS";
      }
    } else if (t >= 104779632) {
      return "NO_POLICY";
    } else {
      return "";
    }
  } else {
    return "DISABLED";
  }
}

var Enum_ActionExecutionCapabilitySetting = {
  unwrap: unwrap$115,
  wrap: wrap$115
};

function unwrap$116(wrapped) {
  switch (wrapped) {
    case "CLOSED" :
        return /* CLOSED */-1059826260;
    case "OPEN" :
        return /* OPEN */880069578;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$116(t) {
  if (t !== -769308010) {
    if (t >= 880069578) {
      return "OPEN";
    } else {
      return "CLOSED";
    }
  } else {
    return "";
  }
}

var Enum_PullRequestUpdateState = {
  unwrap: unwrap$116,
  wrap: wrap$116
};

function unwrap$117(wrapped) {
  switch (wrapped) {
    case "ADMIN" :
        return /* ADMIN */439936111;
    case "ALL" :
        return /* ALL */3249409;
    case "BILLING_MANAGER" :
        return /* BILLING_MANAGER */-895173143;
    case "ORG_MEMBERSHIP" :
        return /* ORG_MEMBERSHIP */478248177;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$117(t) {
  if (t !== -769308010) {
    if (t >= 439936111) {
      if (t >= 478248177) {
        return "ORG_MEMBERSHIP";
      } else {
        return "ADMIN";
      }
    } else if (t >= 3249409) {
      return "ALL";
    } else {
      return "BILLING_MANAGER";
    }
  } else {
    return "";
  }
}

var Enum_EnterpriseMembershipType = {
  unwrap: unwrap$117,
  wrap: wrap$117
};

function unwrap$118(wrapped) {
  if (wrapped === "NAME") {
    return /* NAME */868235851;
  } else {
    return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$118(t) {
  if (t >= 868235851) {
    return "NAME";
  } else {
    return "";
  }
}

var Enum_EnterpriseOrderField = {
  unwrap: unwrap$118,
  wrap: wrap$118
};

function unwrap$119(wrapped) {
  switch (wrapped) {
    case "MARKASREAD" :
        return /* MARKASREAD */-461325035;
    case "STATE" :
        return /* STATE */33140209;
    case "TIMELINE" :
        return /* TIMELINE */-691995007;
    case "UPDATED" :
        return /* UPDATED */497260059;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$119(t) {
  if (t !== -691995007) {
    if (t >= 33140209) {
      if (t >= 497260059) {
        return "UPDATED";
      } else {
        return "STATE";
      }
    } else if (t >= -461325035) {
      return "MARKASREAD";
    } else {
      return "";
    }
  } else {
    return "TIMELINE";
  }
}

var Enum_IssuePubSubTopic = {
  unwrap: unwrap$119,
  wrap: wrap$119
};

function unwrap$120(wrapped) {
  switch (wrapped) {
    case "ABUSE" :
        return /* ABUSE */418157030;
    case "OFF_TOPIC" :
        return /* OFF_TOPIC */690873695;
    case "OUTDATED" :
        return /* OUTDATED */-576569560;
    case "RESOLVED" :
        return /* RESOLVED */-432665608;
    case "SPAM" :
        return /* SPAM */924426953;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$120(t) {
  if (t >= -432665608) {
    if (t >= 690873695) {
      if (t >= 924426953) {
        return "SPAM";
      } else {
        return "OFF_TOPIC";
      }
    } else if (t >= 418157030) {
      return "ABUSE";
    } else {
      return "RESOLVED";
    }
  } else if (t >= -576569560) {
    return "OUTDATED";
  } else {
    return "";
  }
}

var Enum_ReportedContentClassifiers = {
  unwrap: unwrap$120,
  wrap: wrap$120
};

function unwrap$121(wrapped) {
  switch (wrapped) {
    case "ACTIVE" :
        return /* ACTIVE */-926356026;
    case "PENDING_DELETION" :
        return /* PENDING_DELETION */446310230;
    case "SUSPENDED" :
        return /* SUSPENDED */-932196677;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$121(t) {
  if (t >= -769308010) {
    if (t >= 446310230) {
      return "PENDING_DELETION";
    } else {
      return "";
    }
  } else if (t >= -926356026) {
    return "ACTIVE";
  } else {
    return "SUSPENDED";
  }
}

var Enum_OauthApplicationRevokeTokensAuditEntryState = {
  unwrap: unwrap$121,
  wrap: wrap$121
};

function unwrap$122(wrapped) {
  switch (wrapped) {
    case "HEAD_REF" :
        return /* HEAD_REF */787790676;
    case "MARKASREAD" :
        return /* MARKASREAD */-461325035;
    case "STATE" :
        return /* STATE */33140209;
    case "TIMELINE" :
        return /* TIMELINE */-691995007;
    case "UPDATED" :
        return /* UPDATED */497260059;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$122(t) {
  if (t >= -461325035) {
    if (t >= 497260059) {
      if (t >= 787790676) {
        return "HEAD_REF";
      } else {
        return "UPDATED";
      }
    } else if (t >= 33140209) {
      return "STATE";
    } else {
      return "MARKASREAD";
    }
  } else if (t >= -691995007) {
    return "TIMELINE";
  } else {
    return "";
  }
}

var Enum_PullRequestPubSubTopic = {
  unwrap: unwrap$122,
  wrap: wrap$122
};

function unwrap$123(wrapped) {
  switch (wrapped) {
    case "NEW" :
        return /* NEW */3894336;
    case "UPLOADED" :
        return /* UPLOADED */124187808;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$123(t) {
  if (t !== 3894336) {
    if (t >= 124187808) {
      return "UPLOADED";
    } else {
      return "";
    }
  } else {
    return "NEW";
  }
}

var Enum_RegistryPackageFileState = {
  unwrap: unwrap$123,
  wrap: wrap$123
};

function unwrap$124(wrapped) {
  switch (wrapped) {
    case "ALL" :
        return /* ALL */3249409;
    case "OUTSIDE" :
        return /* OUTSIDE */-432905979;
    default:
      return /* FUTURE_ADDED_VALUE__ */-769308010;
  }
}

function wrap$124(t) {
  if (t !== -432905979) {
    if (t >= 3249409) {
      return "ALL";
    } else {
      return "";
    }
  } else {
    return "OUTSIDE";
  }
}

var Enum_RepositoryCollaboratorAffiliation = {
  unwrap: unwrap$124,
  wrap: wrap$124
};

exports.Enum_EnterpriseMemberOrderField = Enum_EnterpriseMemberOrderField;
exports.Enum_OrderDirection = Enum_OrderDirection;
exports.Enum_EnterpriseUserAccountMembershipRole = Enum_EnterpriseUserAccountMembershipRole;
exports.Enum_EnterpriseUserDeployment = Enum_EnterpriseUserDeployment;
exports.Enum_RegistryPackageType = Enum_RegistryPackageType;
exports.Enum_RegistryPackageDependencyType = Enum_RegistryPackageDependencyType;
exports.Enum_PullRequestState = Enum_PullRequestState;
exports.Enum_IssueOrderField = Enum_IssueOrderField;
exports.Enum_CommentAuthorAssociation = Enum_CommentAuthorAssociation;
exports.Enum_CommentCannotUpdateReason = Enum_CommentCannotUpdateReason;
exports.Enum_IssueState = Enum_IssueState;
exports.Enum_LockReason = Enum_LockReason;
exports.Enum_ReactionContent = Enum_ReactionContent;
exports.Enum_ReactionOrderField = Enum_ReactionOrderField;
exports.Enum_ProjectCardArchivedState = Enum_ProjectCardArchivedState;
exports.Enum_ProjectCardState = Enum_ProjectCardState;
exports.Enum_ProjectColumnPurpose = Enum_ProjectColumnPurpose;
exports.Enum_ProjectState = Enum_ProjectState;
exports.Enum_ProjectOrderField = Enum_ProjectOrderField;
exports.Enum_SubscriptionState = Enum_SubscriptionState;
exports.Enum_StarOrderField = Enum_StarOrderField;
exports.Enum_RepositoryLockReason = Enum_RepositoryLockReason;
exports.Enum_RepositoryPrivacy = Enum_RepositoryPrivacy;
exports.Enum_RepositoryOrderField = Enum_RepositoryOrderField;
exports.Enum_RepositoryAffiliation = Enum_RepositoryAffiliation;
exports.Enum_UserStatusOrderField = Enum_UserStatusOrderField;
exports.Enum_PinnableItemType = Enum_PinnableItemType;
exports.Enum_GistOrderField = Enum_GistOrderField;
exports.Enum_SponsorshipPrivacy = Enum_SponsorshipPrivacy;
exports.Enum_AuditLogOrderField = Enum_AuditLogOrderField;
exports.Enum_OperationType = Enum_OperationType;
exports.Enum_OauthApplicationCreateAuditEntryState = Enum_OauthApplicationCreateAuditEntryState;
exports.Enum_OrgAddMemberAuditEntryPermission = Enum_OrgAddMemberAuditEntryPermission;
exports.Enum_OrgCreateAuditEntryBillingPlan = Enum_OrgCreateAuditEntryBillingPlan;
exports.Enum_OrganizationInvitationType = Enum_OrganizationInvitationType;
exports.Enum_OrganizationInvitationRole = Enum_OrganizationInvitationRole;
exports.Enum_OrgRemoveBillingManagerAuditEntryReason = Enum_OrgRemoveBillingManagerAuditEntryReason;
exports.Enum_OrgRemoveMemberAuditEntryMembershipType = Enum_OrgRemoveMemberAuditEntryMembershipType;
exports.Enum_OrgRemoveMemberAuditEntryReason = Enum_OrgRemoveMemberAuditEntryReason;
exports.Enum_OrgRemoveOutsideCollaboratorAuditEntryMembershipType = Enum_OrgRemoveOutsideCollaboratorAuditEntryMembershipType;
exports.Enum_OrgRemoveOutsideCollaboratorAuditEntryReason = Enum_OrgRemoveOutsideCollaboratorAuditEntryReason;
exports.Enum_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission = Enum_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission;
exports.Enum_OrgUpdateMemberAuditEntryPermission = Enum_OrgUpdateMemberAuditEntryPermission;
exports.Enum_OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility = Enum_OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility;
exports.Enum_RepoAccessAuditEntryVisibility = Enum_RepoAccessAuditEntryVisibility;
exports.Enum_RepoAddMemberAuditEntryVisibility = Enum_RepoAddMemberAuditEntryVisibility;
exports.Enum_RepoArchivedAuditEntryVisibility = Enum_RepoArchivedAuditEntryVisibility;
exports.Enum_RepoChangeMergeSettingAuditEntryMergeType = Enum_RepoChangeMergeSettingAuditEntryMergeType;
exports.Enum_RepoCreateAuditEntryVisibility = Enum_RepoCreateAuditEntryVisibility;
exports.Enum_RepoDestroyAuditEntryVisibility = Enum_RepoDestroyAuditEntryVisibility;
exports.Enum_RepoRemoveMemberAuditEntryVisibility = Enum_RepoRemoveMemberAuditEntryVisibility;
exports.Enum_OrganizationMemberRole = Enum_OrganizationMemberRole;
exports.Enum_TeamPrivacy = Enum_TeamPrivacy;
exports.Enum_TeamRole = Enum_TeamRole;
exports.Enum_TeamOrderField = Enum_TeamOrderField;
exports.Enum_TeamDiscussionCommentOrderField = Enum_TeamDiscussionCommentOrderField;
exports.Enum_TeamDiscussionOrderField = Enum_TeamDiscussionOrderField;
exports.Enum_TeamMembershipType = Enum_TeamMembershipType;
exports.Enum_TeamMemberRole = Enum_TeamMemberRole;
exports.Enum_TeamMemberOrderField = Enum_TeamMemberOrderField;
exports.Enum_TeamRepositoryOrderField = Enum_TeamRepositoryOrderField;
exports.Enum_RepositoryPermission = Enum_RepositoryPermission;
exports.Enum_CollaboratorAffiliation = Enum_CollaboratorAffiliation;
exports.Enum_DefaultRepositoryPermissionField = Enum_DefaultRepositoryPermissionField;
exports.Enum_PullRequestOrderField = Enum_PullRequestOrderField;
exports.Enum_DeploymentOrderField = Enum_DeploymentOrderField;
exports.Enum_DeploymentStatusState = Enum_DeploymentStatusState;
exports.Enum_DeploymentState = Enum_DeploymentState;
exports.Enum_GitSignatureState = Enum_GitSignatureState;
exports.Enum_StatusState = Enum_StatusState;
exports.Enum_LanguageOrderField = Enum_LanguageOrderField;
exports.Enum_MilestoneState = Enum_MilestoneState;
exports.Enum_MilestoneOrderField = Enum_MilestoneOrderField;
exports.Enum_RefOrderField = Enum_RefOrderField;
exports.Enum_ReleaseOrderField = Enum_ReleaseOrderField;
exports.Enum_SecurityAdvisorySeverity = Enum_SecurityAdvisorySeverity;
exports.Enum_SecurityVulnerabilityOrderField = Enum_SecurityVulnerabilityOrderField;
exports.Enum_SecurityAdvisoryEcosystem = Enum_SecurityAdvisoryEcosystem;
exports.Enum_UserBlockDuration = Enum_UserBlockDuration;
exports.Enum_IssueTimelineItemsItemType = Enum_IssueTimelineItemsItemType;
exports.Enum_MergeableState = Enum_MergeableState;
exports.Enum_PullRequestReviewState = Enum_PullRequestReviewState;
exports.Enum_PullRequestReviewCommentState = Enum_PullRequestReviewCommentState;
exports.Enum_PullRequestTimelineItemsItemType = Enum_PullRequestTimelineItemsItemType;
exports.Enum_CommitContributionOrderField = Enum_CommitContributionOrderField;
exports.Enum_ContributionOrderField = Enum_ContributionOrderField;
exports.Enum_GistPrivacy = Enum_GistPrivacy;
exports.Enum_RepositoryContributionType = Enum_RepositoryContributionType;
exports.Enum_SavedReplyOrderField = Enum_SavedReplyOrderField;
exports.Enum_OrganizationOrderField = Enum_OrganizationOrderField;
exports.Enum_EnterpriseAdministratorRole = Enum_EnterpriseAdministratorRole;
exports.Enum_EnterpriseEnabledDisabledSettingValue = Enum_EnterpriseEnabledDisabledSettingValue;
exports.Enum_EnterpriseDefaultRepositoryPermissionSettingValue = Enum_EnterpriseDefaultRepositoryPermissionSettingValue;
exports.Enum_EnterpriseServerInstallationOrderField = Enum_EnterpriseServerInstallationOrderField;
exports.Enum_EnterpriseServerUserAccountOrderField = Enum_EnterpriseServerUserAccountOrderField;
exports.Enum_EnterpriseServerUserAccountEmailOrderField = Enum_EnterpriseServerUserAccountEmailOrderField;
exports.Enum_EnterpriseServerUserAccountsUploadOrderField = Enum_EnterpriseServerUserAccountsUploadOrderField;
exports.Enum_EnterpriseServerUserAccountsUploadSyncState = Enum_EnterpriseServerUserAccountsUploadSyncState;
exports.Enum_EnterpriseMembersCanCreateRepositoriesSettingValue = Enum_EnterpriseMembersCanCreateRepositoriesSettingValue;
exports.Enum_OrganizationMembersCanCreateRepositoriesSettingValue = Enum_OrganizationMembersCanCreateRepositoriesSettingValue;
exports.Enum_EnterpriseMembersCanMakePurchasesSettingValue = Enum_EnterpriseMembersCanMakePurchasesSettingValue;
exports.Enum_RepositoryVisibility = Enum_RepositoryVisibility;
exports.Enum_EnterpriseAdministratorInvitationOrderField = Enum_EnterpriseAdministratorInvitationOrderField;
exports.Enum_RepositoryInvitationOrderField = Enum_RepositoryInvitationOrderField;
exports.Enum_SamlDigestAlgorithm = Enum_SamlDigestAlgorithm;
exports.Enum_SamlSignatureAlgorithm = Enum_SamlSignatureAlgorithm;
exports.Enum_IdentityProviderConfigurationState = Enum_IdentityProviderConfigurationState;
exports.Enum_EnterpriseEnabledSettingValue = Enum_EnterpriseEnabledSettingValue;
exports.Enum_SearchType = Enum_SearchType;
exports.Enum_SecurityAdvisoryOrderField = Enum_SecurityAdvisoryOrderField;
exports.Enum_SecurityAdvisoryIdentifierType = Enum_SecurityAdvisoryIdentifierType;
exports.Enum_PullRequestReviewEvent = Enum_PullRequestReviewEvent;
exports.Enum_ProjectTemplate = Enum_ProjectTemplate;
exports.Enum_TopicSuggestionDeclineReason = Enum_TopicSuggestionDeclineReason;
exports.Enum_PullRequestMergeMethod = Enum_PullRequestMergeMethod;
exports.Enum_ActionExecutionCapabilitySetting = Enum_ActionExecutionCapabilitySetting;
exports.Enum_PullRequestUpdateState = Enum_PullRequestUpdateState;
exports.Enum_EnterpriseMembershipType = Enum_EnterpriseMembershipType;
exports.Enum_EnterpriseOrderField = Enum_EnterpriseOrderField;
exports.Enum_IssuePubSubTopic = Enum_IssuePubSubTopic;
exports.Enum_ReportedContentClassifiers = Enum_ReportedContentClassifiers;
exports.Enum_OauthApplicationRevokeTokensAuditEntryState = Enum_OauthApplicationRevokeTokensAuditEntryState;
exports.Enum_PullRequestPubSubTopic = Enum_PullRequestPubSubTopic;
exports.Enum_RegistryPackageFileState = Enum_RegistryPackageFileState;
exports.Enum_RepositoryCollaboratorAffiliation = Enum_RepositoryCollaboratorAffiliation;
/* No side effect */
