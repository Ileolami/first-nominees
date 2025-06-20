import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "open-api/the-movie-database",
    },
    {
      type: "category",
      label: "ACCOUNT",
      items: [
        {
          type: "doc",
          id: "open-api/account-id",
          label: "Account ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/details",
          label: "Details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/add-favourite",
          label: "Add Favourite",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-api/add-to-watchlist",
          label: "Add to Watchlist",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-api/favorite-movies",
          label: "Favorite Movies",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/favorite-tv",
          label: "Favorite TV",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/lists",
          label: "Lists",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/rated-movie",
          label: "Rated Movie",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/rated-tv",
          label: "Rated Tv",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/rated-tv-episode",
          label: "Rated Tv Episode",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/watchlist-movies",
          label: "Watchlist Movies",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/watchlist-tv",
          label: "Watchlist TV",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "AUTHENTICATION",
      items: [
        {
          type: "doc",
          id: "open-api/create-guest-session",
          label: "Create Guest Session",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/create-request-token",
          label: "Create Request Token",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/validate-request-token-with-login",
          label: "Validate Request Token with login",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-api/create-session",
          label: "Create Session",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-api/create-session-from-v-4-token",
          label: "Create Session (from v4 token)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-api/delete-session",
          label: "Delete Session",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "open-api/validate-key",
          label: "Validate Key",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "CERTIFICATION",
      items: [
        {
          type: "doc",
          id: "open-api/movies",
          label: "Movies",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/tv",
          label: "TV",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "CHANGES",
      items: [
        {
          type: "doc",
          id: "open-api/movies-list",
          label: "Movies List",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/people-list",
          label: "People List",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/tv-list",
          label: "TV List",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "COLLECTION",
      items: [
        {
          type: "doc",
          id: "open-api/details-1",
          label: "Details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/images",
          label: "Images",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/translations",
          label: "Translations",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "COMPANIES",
      items: [
        {
          type: "doc",
          id: "open-api/details-2",
          label: "Details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/alternative-names",
          label: "Alternative Names",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/images-1",
          label: "Images",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "CONFIGURATION",
      items: [
        {
          type: "doc",
          id: "open-api/details-3",
          label: "Details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/job",
          label: "Job",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/countries",
          label: "Countries",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/languages",
          label: "Languages",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/primary-translation",
          label: "Primary Translation",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/time-zones",
          label: "Time Zones",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "CREDITS",
      items: [
        {
          type: "doc",
          id: "open-api/details-4",
          label: "Details",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "DISCOVER",
      items: [
        {
          type: "doc",
          id: "open-api/movies-1",
          label: "Movies",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/tv-1",
          label: "TV",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "FIND",
      items: [
        {
          type: "doc",
          id: "open-api/find-by-id",
          label: "Find by ID",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "GENRES",
      items: [
        {
          type: "doc",
          id: "open-api/movies-2",
          label: "Movies",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/tv-2",
          label: "TV",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "GUEST SESSION",
      items: [
        {
          type: "doc",
          id: "open-api/rated-movie-1",
          label: "Rated Movie",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/rated-tv-1",
          label: "Rated TV",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/rated-tv-episodes",
          label: "Rated TV Episodes",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "KEYWORDS",
      items: [
        {
          type: "doc",
          id: "open-api/details-5",
          label: "Details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/movies-3",
          label: "Movies",
          className: "menu__list-item--deprecated api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "LISTS",
      items: [
        {
          type: "doc",
          id: "open-api/details-6",
          label: "Details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/delete",
          label: "Delete",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "open-api/add-movie",
          label: "Add Movie",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-api/check-item-status",
          label: "Check item Status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/clear",
          label: "Clear",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-api/create",
          label: "Create",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-api/remove-movie",
          label: "Remove Movie",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "MOVIE LISTS",
      items: [
        {
          type: "doc",
          id: "open-api/now-playing",
          label: "Now Playing",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/popular",
          label: "Popular",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/top-rated",
          label: "Top Rated",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/upcoming",
          label: "Upcoming",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "MOVIES",
      items: [
        {
          type: "doc",
          id: "open-api/details-7",
          label: "Details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/account-states",
          label: "Account States",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/alternative-title",
          label: "Alternative Title",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/changes",
          label: "Changes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/credit",
          label: "Credit",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/external-ids",
          label: "External IDs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/images-2",
          label: "Images",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/keywords",
          label: "Keywords",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/latest",
          label: "Latest",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/lists-1",
          label: "Lists",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/recommendations",
          label: "Recommendations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/release-dates",
          label: "Release Dates",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/reviews",
          label: "Reviews",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/similar",
          label: "Similar",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/translations-1",
          label: "Translations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/videos",
          label: "Videos",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/watch-providers",
          label: "Watch Providers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/rating",
          label: "Add Rating",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-api/delete-rating",
          label: "Delete Rating",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "NETWORK",
      items: [
        {
          type: "doc",
          id: "open-api/details-8",
          label: "Details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/alternative-names-1",
          label: "Alternative names",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/images-3",
          label: "Images",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "PEOPLE",
      items: [
        {
          type: "doc",
          id: "open-api/details-9",
          label: "Details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/changes-1",
          label: "Changes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/combine-credit",
          label: "Combine Credit",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/external-ids-1",
          label: "External IDs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/images-4",
          label: "Images",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/latest-1",
          label: "Latest",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/movie-credit",
          label: "Movie Credit",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/tv-credit",
          label: "TV Credit",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/tagged-images",
          label: "Tagged Images",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "open-api/translations-2",
          label: "Translations",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "PEOPLE LISTS",
      items: [
        {
          type: "doc",
          id: "open-api/popular-1",
          label: "Popular",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "REVIEWS",
      items: [
        {
          type: "doc",
          id: "open-api/details-10",
          label: "Details",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "SEARCH",
      items: [
        {
          type: "doc",
          id: "open-api/collection",
          label: "Collection",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/company",
          label: "Company",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/keywords-1",
          label: "Keywords",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/movies-4",
          label: "Movies",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/multi",
          label: "Multi",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/person",
          label: "Person",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/tv-3",
          label: "TV",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "TRENDING",
      items: [
        {
          type: "doc",
          id: "open-api/all",
          label: "All",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/movie",
          label: "Movie",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/people",
          label: "People",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/tv-4",
          label: "TV",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "TV SERIES LIST",
      items: [
        {
          type: "doc",
          id: "open-api/airing-today",
          label: "Airing Today",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/on-the-air",
          label: "On The Air",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/popular-2",
          label: "Popular",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/top-rated-1",
          label: "Top Rated",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "TV SERIES",
      items: [
        {
          type: "doc",
          id: "open-api/details-11",
          label: "Details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/account-states-1",
          label: "Account states",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/aggregate-credit",
          label: "Aggregate Credit",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/alternative-titles",
          label: "Alternative Titles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/changes-2",
          label: "Changes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/content-ratings",
          label: "Content Ratings",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/credits",
          label: "Credits",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/episode-groups",
          label: "Episode Groups",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/external-ids-2",
          label: "External IDs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/images-5",
          label: "Images",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/keywords-2",
          label: "Keywords",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/latest-2",
          label: "Latest",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/lists-2",
          label: "Lists",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/recommendations-1",
          label: "Recommendations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/reviews-1",
          label: "Reviews",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/screened-theatrically",
          label: "Screened Theatrically",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/similar-1",
          label: "Similar",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/translations-3",
          label: "Translations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/videos-1",
          label: "Videos",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/watch-providers-1",
          label: "Watch providers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/add-ratings",
          label: "Add Ratings",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-api/delete-rating-1",
          label: "Delete Rating",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "TV SEASONS",
      items: [
        {
          type: "doc",
          id: "open-api/details-12",
          label: "Details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/account-states-1",
          label: "Account States",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/aggregate-credit-1",
          label: "Aggregate Credit",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/changes-3",
          label: "Changes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/credits-1",
          label: "Credits",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/external-ids-3",
          label: "External IDs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/images-6",
          label: "Images",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/translations-4",
          label: "Translations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/videos-2",
          label: "Videos",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/watch-providers-2",
          label: "Watch Providers",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "TV EPISODES",
      items: [
        {
          type: "doc",
          id: "open-api/details-13",
          label: "Details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/account-states-2",
          label: "Account States",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/changes-4",
          label: "Changes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/credits-2",
          label: "Credits",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/external-ids-4",
          label: "External IDs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/images-7",
          label: "Images",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/translations-5",
          label: "Translations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/videos-3",
          label: "Videos",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/add-rating",
          label: "Add rating",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "open-api/delete-rating-2",
          label: "Delete Rating",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "TV EPISODES GROUPS",
      items: [
        {
          type: "doc",
          id: "open-api/details-14",
          label: "Details",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "WATCH PROVIDERS",
      items: [
        {
          type: "doc",
          id: "open-api/available-regions",
          label: "Available Regions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/movie-providers",
          label: "Movie Providers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "open-api/tv-providers",
          label: "TV Providers",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
