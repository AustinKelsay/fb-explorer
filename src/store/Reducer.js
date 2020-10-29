import {GET_USER_DATA, GET_JUNK_DATA, SHOW_DATA, GET_USER_NAME, SET_DATA_TYPE, SET_QUERY, GET_INDEX_HTML } from "./Actions"

const initialState = {
    index: {},

    user_fb_name: '',

    user_data: {
        
    },
    junk_data: {

    },

    active_data_type: {

    },

    media_content: {

    },

    about_you: {

    },
    ads_and_businesses: {

    },
    apps_and_websites: {

    },
    comments: {

    },
    events: {

    },
    following_and_followers: {

    },
    friends: {

    },
    groups: {

    },
    likes_and_reactions: {

    },
    location: {

    },
    marketplace: {

    },
    messages: {

    },
    other_activity: {

    },
    pages: {

    },
    payment_history: {

    },
    photos_and_videos: {

    },
    portal: {

    },
    posts: {

    },
    profile_information: {

    },
    saved_items_and_collections: {

    },
    search_history: {

    },
    security_and_login_information: {

    },
    stories: {

    },
    your_places: {

    },

    query: ""
}

export function Reducer (state = initialState, action) {
    switch(action.type) {
        case GET_INDEX_HTML: {
            return {...state, index: action.payload}
        }
        case GET_USER_DATA: {
            const name = action.payload.name
            return {...state, user_data: {...state.user_data, [name]: action.payload.data} }
        }
        case GET_JUNK_DATA: {
            const name = action.payload.name
            return {...state, junk_data: {...state.junk_data, [name]: action.payload.data} }
        }
        case GET_USER_NAME: {
            return { ...state, user_fb_name: state.user_data["profile_information.html"].profile.name.full_name }
        }
        case SHOW_DATA: {
            console.log(state.user_data)
        }
        case SET_QUERY: {
            console.log(action.payload)
            return {...state, query: action.payload};
        }
        case SET_DATA_TYPE: {
            if(action.payload === 1)
            return{...state, active_data_type: {
                about_you: {
                    face_recognition: state.user_data['face_recognition.html'],
                    friend_peer_group: state.user_data['friend_peer_group.html'],
                    your_address_books: state.user_data['your_address_books.html']
                }
            } 
        }
            if(action.payload === 2)
            return{...state, active_data_type: {
                ads_and_businesses: {
                    ads_interests: state.user_data['ads_interests.html'],
                    advertisers_who_uploaded_a_contact_list_with_your_information: state.user_data['advertisers_who_uploaded_a_contact_list_with_your_information.html'],
                    your_off_facebook_activity: state.user_data['your_off_facebook_activity.html']
                }
            }
            }
            if(action.payload === 3)
            return{...state, active_data_type: {
                apps_and_websites: {
                    apps_and_websites: state.user_data['apps_and_websites.html'].installed_apps,
                    posts_from_apps_and_websites: state.user_data['posts_from_apps_and_websites.html'].app_posts,
                    your_apps: state.user_data['your_apps.html'].admined_apps
                }
            }
            }
            if(action.payload === 4)
            return{...state, active_data_type: {
                comments: {
                    comments: state.user_data['comments.html'].comments,
                }
            }
            }
            if(action.payload === 5)
            return{...state, active_data_type: {
                events: {
                    events_invitations: state.user_data['event_invitations.html'].events_invited,
                    your_event_responses: state.user_data['your_event_responses.html'].event_responses,
                }
            }
            }
            if(action.payload === 6)
            return{...state, active_data_type: {
                following_and_followers: {
                    following: state.user_data['following.html'],
                }
            }
            }
            if(action.payload === 7)
            return{...state, active_data_type: {
                friends: {
                    friends: state.user_data['friends.html'],
                    received_friend_requests: state.user_data['received_friend_requests.html'],
                    rejected_friend_requests: state.user_data['rejected_friend_requests'],
                    removed_friends: state.user_data['removed_friends.html'],
                    sent_friend_requests: state.user_data['sent_friend_requests.html']
                }
            }
            }
            if(action.payload === 8)
            return{...state, active_data_type: {
                groups: {
                    your_group_membership_activity: state.user_data['your_group_membership_activity.html'],
                    your_groups: state.user_data['your_groups.html'],
                    your_posts_and_comments_in_groups: state.user_data['your_posts_and_comments_in_groups.html']
                }
            }
            }
            if(action.payload === 9)
            return{...state, active_data_type: {
                likes_and_reactions: {
                    likes_on_external_sites: state.user_data['likes_on_external_sites.html'],
                    pages: state.user_data['pages.html'],
                    posts_and_comments: state.user_data['posts_and_comments.html']
                }
            }
            }
            if(action.payload === 10)
            return{...state, active_data_type: {
                location: {
                    no_data: state.user_data['no_data.txt']
                }
            }
            }
            if(action.payload === 11)
            return{...state, active_data_type: {
                marketplace: {
                    items_sold: state.user_data['items_sold.html'],
                }
            }
            }
            if(action.payload === 12)
            return{...state, active_data_type: {
                messages: {
                    archived_threads: {
                        
                    }
                }
                }
            }
            if(action.payload === 13)
            return{...state, active_data_type: {
                other_activity: {
                    pokes: state.user_data['pokes.html'],
                    polls_you_voted_on: state.user_data['polls_you_voted_on.html'],
                }
            }
            }
            if(action.payload === 14)
            return{...state, active_data_type: {
                pages: {
                    your_pages: state.user_data['your_pages.html'],
                }
            }
            }
            if(action.payload === 15)
            return{...state, active_data_type: {
                payment_history: {
                    payment_history: state.user_data['payment_history.html']
                }
            }
            }
            if(action.payload === 16)
            //still need to filter actual photos/videos out of junk data
            return{...state, active_data_type: {

                photos_and_videos: {
                    album: {
                        0: state.user_data['0.html'],
                        1: state.user_data['1.html'],
                        2: state.user_data['2.html'],
                        3: state.user_data['3.html'],
                        4: state.user_data['4.html'],
                        5: state.user_data['5.html'],
                        6: state.user_data['6.html'],
                        7: state.user_data['7.html'],
                        8: state.user_data['8.html']
                        // have to find a way to search for all of them
                    },
                    your_videos: state.user_data['your_videos.html'],
                    your_posts: state.user_data
                }
            }
            }
            if(action.payload === 17)
            return{...state, active_data_type: {
                portal: {
        
                }
                }
            }
            if(action.payload === 18)
            return{...state, active_data_type: {
                    posts: {
                        other_peoples_posts_to_your_timeline: state.user_data["other_people's_posts_to_your_timeline.html"],
                        your_posts: {
                            1: state.user_data['your_posts_1.html'],
                            2: state.user_data['your_posts_2.html']
                            // have to search for all o>Messages</p>
                        }
                    }
                }
            }
            if(action.payload === 19)
            return{...state, active_data_type: {
                profile_information: {
                    profile_information: state.user_data['profile_information.html'],
                    profile_update_history: state.user_data['profile_update_history.html']
                }
            }
            }
            if(action.payload === 20)
            return{...state, active_data_type: {
                saved_items_and_collections: {
                    saved_items_and_collections: state.user_data['saved_items_and_collections.html']
                }
            }
            }
            if(action.payload === 21)
            return{...state, active_data_type: {
                search_history: {
                    your_search_history: state.user_data['your_search_history.html']
                }
            }
            }
            if(action.payload === 22)
            return{...state, active_data_type: {
                security_and_login_information: {
                    account_activity: state.user_data['account_activity.html'],
                    authorized_logins: state.user_data['authorized_logins.html'],
                    datr_cookie_info: state.user_data['datr_cookie_info.html'],
                    login_protection_data: state.user_data['login_protection_data.html'],
                    logins_and_logouts: state.user_data['logins_and_logouts.html'],
                    used_ip_addresses: state.user_data['used_ip_addresses.html'],
                    where_youre_logged_in: state.user_data["where_you're_logged_in.html"],
                }
            }
            }
            if(action.payload === 23)
            return{...state, active_data_type: {
                stories: {
                    //no data txt
                }
            }
            }
            if(action.payload === 24)
            return{...state, active_data_type: {
                your_places: {
                    //no data txt
                }
            }
            }
        }
        break
        default: return state;
    }
}