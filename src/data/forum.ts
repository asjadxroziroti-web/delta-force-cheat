export type { ForumComment, ForumPost } from './forum/types';
import type { ForumPost } from './forum/types';

export const forumCategories = [
  { name: 'Buying Questions', tone: 'blue', icon: 'tag' },
  { name: 'Features', tone: 'purple', icon: 'layers' },
  { name: 'Setup Help', tone: 'green', icon: 'settings' },
  { name: 'Status and Updates', tone: 'orange', icon: 'refresh' },
  { name: 'Anti-Cheat', tone: 'orange', icon: 'shieldCheck' },
  { name: 'Ban Help', tone: 'green', icon: 'alert' },
] as const;

export const forumPosts: ForumPost[] = [
  {
    slug: 'delta-force-cheat-monthly-or-lifetime', category: 'Buying Questions', categoryTone: 'blue',
    title: 'Delta Force cheat monthly or lifetime, what makes sense?',
    excerpt: 'Players compare the published monthly and lifetime plans before choosing a duration.', author: 'maproom_mike', age: '7d', published: '2026-10-10', commentsCount: 5, upvotes: 31,
    primaryKeyword: 'delta force cheat monthly or lifetime', secondaryKeywords: ['delta force cheat price', 'delta force cheat lifetime'], searchIntent: 'Commercial', searchTopic: 'Choosing between the published monthly and lifetime plans', suggestedInternalLinks: ['/product/', '/blog/delta-force-cheat-price-monthly-vs-lifetime/'],
    body: ['looking at the delta force cheat plans and trying to decide between monthly and lifetime. is there any feature difference or is it just the access length?'],
    comments: [
      { author: 'quietscope', age: '6d', score: 12, body: 'From the product page, the listed feature groups are the same. Monthly is $35 and lifetime is $150.' },
      { author: 'maproom_mike', age: '6d', score: 4, body: 'that is what i needed. i was expecting a different tier listed somewhere lol' },
      { author: 'northbridge', age: '5d', score: 9, body: 'I would check your PC requirements before either plan. HVCI, Core Isolation, TPM, Secure Boot, and Cloud DMA are the part people skip.' },
      { author: 'quietscope', age: '5d', score: 3, body: 'Yep, read the setup page first. A lifetime purchase does not fix a missing requirement.' },
    ],
  },
  {
    slug: 'delta-force-cheat-setup-windows-11', category: 'Setup Help', categoryTone: 'green',
    title: 'Delta Force cheat setup on Windows 11: which settings matter?',
    excerpt: 'A setup question about Windows 11, firmware security, and the first launch checklist.', author: 'bluehour', age: '14d', published: '2026-10-03', commentsCount: 5, upvotes: 44,
    primaryKeyword: 'delta force cheat windows 11', secondaryKeywords: ['delta force cheat setup', 'delta force cheat requirements'], searchIntent: 'Support', searchTopic: 'Checking Windows 11 requirements before setup', suggestedInternalLinks: ['/product/', '/support/', '/blog/delta-force-cheat-setup-requirements-before-launch/'],
    body: ['on win11. windows security says core isolation is off and i am not sure if that is a hard stop or just a recommendation. what should i check before trying to set this up?'],
    comments: [
      { author: 'packetloss', age: '13d', score: 18, body: 'The published requirements list HVCI, Core Isolation, TPM, and Secure Boot. I would treat all four as required and sort them out first.' },
      { author: 'bluehour', age: '13d', score: 6, body: 'got it. checking bios now. my tpm is on but secure boot was not.' },
      { author: 'oldmonitor', age: '12d', score: 11, body: 'After changing firmware settings, restart Windows before testing. Otherwise you can spend an hour chasing an old state.' },
      { author: 'packetloss', age: '12d', score: 4, body: 'Also note Cloud DMA is listed as required for full functionality. That is easy to miss.' },
    ],
  },
  {
    slug: 'delta-force-aimbot-settings-fov-smoothing', category: 'Features', categoryTone: 'purple',
    title: 'How do the Delta Force aimbot FOV and smoothing settings relate?',
    excerpt: 'A community discussion separates FOV, speed, smoothing, stickiness, and bone selection.', author: 'lowpolywolf', age: '20d', published: '2026-09-27', commentsCount: 6, upvotes: 37,
    primaryKeyword: 'delta force aimbot settings', secondaryKeywords: ['delta force aimbot fov', 'delta force cheat config'], searchIntent: 'Feature', searchTopic: 'Understanding the listed aimbot controls', suggestedInternalLinks: ['/product/', '/blog/delta-force-aimbot-esp-settings-explained/'],
    body: ['can someone explain the difference between fov, speed, smooth and stickiness in the delta force menu? i keep changing all four and learning absolutely nothing'],
    comments: [
      { author: 'rangefinder', age: '19d', score: 15, body: 'FOV is the area considered around your crosshair. Speed and smooth affect movement. Stickiness affects how strongly a target is held.' },
      { author: 'lowpolywolf', age: '19d', score: 5, body: 'that is clearer than the labels were in my head lol' },
      { author: 'copperwire', age: '18d', score: 8, body: 'Change one setting at a time. Make a baseline config first so you can go back when the menu turns into soup.' },
      { author: 'rangefinder', age: '18d', score: 3, body: 'Bone selection is separate too. It changes the selected target location, not the FOV.' },
      { author: 'lowpolywolf', age: '18d', score: 2, body: 'saving this. my config was definitely soup.' },
    ],
  },
  {
    slug: 'delta-force-loot-esp-minimum-price-filter', category: 'Features', categoryTone: 'purple',
    title: 'Does the Delta Force loot ESP minimum price filter help?',
    excerpt: 'Players discuss using price, rarity, corpse, and computer filters without filling the screen.', author: 'stashroute', age: '28d', published: '2026-09-19', commentsCount: 5, upvotes: 29,
    primaryKeyword: 'delta force loot esp', secondaryKeywords: ['delta force loot esp price filter', 'delta force operations loot guide'], searchIntent: 'Feature', searchTopic: 'Using loot filters for a cleaner Operations run', suggestedInternalLinks: ['/product/', '/blog/delta-force-operations-loot-guide-filters/'],
    body: ['is the minimum price filter actually useful or does everyone just leave loot esp off? i turned on item names and now the screen is basically a receipt'],
    comments: [
      { author: 'thirdfloor', age: '27d', score: 12, body: 'It helps a lot. Set a floor, then add rarity. Turning on every category at once is how you get the receipt.' },
      { author: 'stashroute', age: '27d', score: 4, body: 'receipt is exactly the word. trying a higher floor tonight.' },
      { author: 'sideloaded', age: '26d', score: 7, body: 'I keep corpses and computers off unless the route needs them. They add markers fast.' },
      { author: 'thirdfloor', age: '26d', score: 2, body: 'same. fewer markers, fewer tiny decisions.' },
    ],
  },
  {
    slug: 'delta-force-cheat-not-working-after-patch', category: 'Status and Updates', categoryTone: 'orange',
    title: 'Delta Force cheat stopped after the patch. Status or local setup?',
    excerpt: 'A troubleshooting thread sorts out product status, Windows changes, and configuration issues after a patch.', author: 'just_one_more', age: '35d', published: '2026-09-10', commentsCount: 6, upvotes: 52,
    primaryKeyword: 'delta force cheat after update', secondaryKeywords: ['delta force cheat status', 'delta force cheat update'], searchIntent: 'Status', searchTopic: 'Troubleshooting a post-patch issue', suggestedInternalLinks: ['/product/', '/support/', '/blog/delta-force-cheat-not-working-after-update/'],
    body: ['after the last delta force update my visuals are not showing. no error, just an empty menu where the overlay should be. should i reinstall or wait?'],
    comments: [
      { author: 'statuscheck', age: '34d', score: 21, body: 'Check the current product status before reinstalling. If the build is updating, local changes will not help.' },
      { author: 'just_one_more', age: '34d', score: 7, body: 'status says updating. welp. saved me from doing the classic reinstall five times.' },
      { author: 'hexagon', age: '33d', score: 9, body: 'When it comes back, verify Cloud DMA and the Windows security settings too. Updates sometimes expose old assumptions.' },
      { author: 'statuscheck', age: '33d', score: 4, body: 'And test one group at a time after the update. Player visuals first, then loot and aim.' },
      { author: 'just_one_more', age: '32d', score: 3, body: 'back online now. it was the status, not my pc.' },
    ],
  },
  {
    slug: 'delta-force-cheat-requirements-hvci-tpm-secure-boot', category: 'Setup Help', categoryTone: 'green',
    title: 'Delta Force cheat requirements: HVCI, TPM, and Secure Boot explained',
    excerpt: 'A beginner-friendly thread explains the security settings listed in the product requirements.', author: 'freshinstall', age: '42d', published: '2026-08-30', commentsCount: 5, upvotes: 26,
    primaryKeyword: 'delta force cheat requirements', secondaryKeywords: ['delta force cheat hardware requirements', 'delta force cheat secure boot'], searchIntent: 'Informational', searchTopic: 'Explaining the published Windows security requirements', suggestedInternalLinks: ['/product/', '/faq/', '/blog/delta-force-cheat-setup-requirements-before-launch/'],
    body: ['new pc and i keep seeing HVCI, TPM and secure boot mentioned together. are these game requirements or product requirements? trying to understand before i touch bios settings'],
    comments: [
      { author: 'firmware_fan', age: '41d', score: 14, body: 'They are listed as product setup requirements. The product page also lists Windows 10/11 and Intel/AMD.' },
      { author: 'freshinstall', age: '41d', score: 5, body: 'ah, that distinction helps. i thought the game itself was demanding all of that.' },
      { author: 'quietboot', age: '40d', score: 8, body: 'Check your motherboard manual before changing BIOS settings. Take note of the original values.' },
      { author: 'firmware_fan', age: '40d', score: 3, body: 'TPM is often already on. Secure Boot is the one that likes to stay off.' },
    ],
  },
  {
    slug: 'delta-force-cheat-chams-third-person-fov', category: 'Features', categoryTone: 'purple',
    title: 'What are chams, third person, and FOV changer used for in Delta Force?',
    excerpt: 'A feature-focused conversation breaks down the visual and camera options listed for Delta Force.', author: 'anglehold', age: '49d', published: '2026-08-22', commentsCount: 5, upvotes: 33,
    primaryKeyword: 'delta force chams', secondaryKeywords: ['delta force fov changer', 'delta force third person view'], searchIntent: 'Feature', searchTopic: 'Understanding visual and camera controls', suggestedInternalLinks: ['/product/', '/faq/'],
    body: ['i understand player esp, but what is the actual use case for chams and third person? also is camera fov just a wider view or does it change aim?'],
    comments: [
      { author: 'wideangle', age: '48d', score: 13, body: 'The listed controls are separate groups. Chams change how selected actors or objects are styled. Third person is a camera view toggle. Camera FOV changes the view angle.' },
      { author: 'anglehold', age: '48d', score: 4, body: 'so fov is camera perspective, not the aimbot FOV. got it.' },
      { author: 'wideangle', age: '47d', score: 7, body: 'Right. The aimbot FOV is a targeting control. The camera FOV is a view control.' },
      { author: 'scopecreep', age: '47d', score: 2, body: 'two settings with the same letters. classic menu move lol' },
    ],
  },
  {
    slug: 'delta-force-cheat-config-settings-save-load', category: 'Setup Help', categoryTone: 'green',
    title: 'How should I organize a Delta Force cheat config?',
    excerpt: 'Players share a simple way to save baseline, loot, and visual configurations without losing track of changes.', author: 'config_nerd', age: '57d', published: '2026-08-14', commentsCount: 5, upvotes: 24,
    primaryKeyword: 'delta force cheat config', secondaryKeywords: ['delta force esp settings', 'delta force aimbot settings'], searchIntent: 'Support', searchTopic: 'Saving and testing separate configurations', suggestedInternalLinks: ['/product/', '/blog/delta-force-aimbot-esp-settings-explained/'],
    body: ['does anyone have a sane way to organize configs? mine are final, final2, final2new, and i no longer know what any of them do'],
    comments: [
      { author: 'cleanprofile', age: '56d', score: 15, body: 'Make one baseline, one visual-only profile, and one loot profile. Change one setting, test, then save with a date or clear purpose.' },
      { author: 'config_nerd', age: '56d', score: 5, body: 'visual-only is a good idea. i was mixing every tab together.' },
      { author: 'buttonmash', age: '55d', score: 6, body: 'Also keep a reset profile. Future you will be grateful when present you turns the menu into a science project.' },
      { author: 'cleanprofile', age: '55d', score: 2, body: 'final_final_reallyfinal is not a naming convention, apparently.' },
    ],
  },
  {
    slug: 'delta-force-cheat-support-what-details-to-send', category: 'Setup Help', categoryTone: 'green',
    title: 'What details help support diagnose a Delta Force cheat issue?',
    excerpt: 'A support thread lists the technical details that make a setup or update report easier to investigate.', author: 'errorlog', age: '66d', published: '2026-08-01', commentsCount: 5, upvotes: 19,
    primaryKeyword: 'delta force cheat support', secondaryKeywords: ['delta force cheat help', 'delta force cheat not working'], searchIntent: 'Support', searchTopic: 'Preparing a useful support request', suggestedInternalLinks: ['/support/', '/faq/'],
    body: ['when asking support for help, what should i include? i usually just say “it doesnt work” and then get asked ten questions one at a time'],
    comments: [
      { author: 'logfile', age: '65d', score: 11, body: 'Order email, Windows version, Delta Force build, current status, exact error text, and which feature group is affected.' },
      { author: 'errorlog', age: '65d', score: 4, body: 'that is a much better list than my current strategy of sending “help” at midnight' },
      { author: 'patchnotes', age: '64d', score: 7, body: 'Mention what changed. A game update, Windows update, or firmware change points the investigation in a different direction.' },
      { author: 'logfile', age: '64d', score: 2, body: 'Screenshots help too, as long as they do not include private account details.' },
    ],
  },
  {
    slug: 'delta-force-cheat-product-status-before-buying', category: 'Status and Updates', categoryTone: 'orange',
    title: 'Should I check Delta Force cheat status before buying?',
    excerpt: 'A short status discussion explains why availability and game updates should be checked before a purchase.', author: 'lastupdate', age: '78d', published: '2026-07-24', commentsCount: 5, upvotes: 28,
    primaryKeyword: 'delta force cheat status', secondaryKeywords: ['delta force cheat working', 'delta force cheat latest version'], searchIntent: 'Transactional', searchTopic: 'Checking current availability before purchase', suggestedInternalLinks: ['/product/', '/faq/'],
    body: ['is the status check really necessary before buying or is it just a generic warning? i do not want to overthink it if the product page already has the buy button'],
    comments: [
      { author: 'buildwatch', age: '77d', score: 16, body: 'Game updates can affect availability and controls. Checking status takes less time than buying during an update window.' },
      { author: 'lastupdate', age: '77d', score: 4, body: 'fair. i was treating it like a disclaimer instead of an actual step.' },
      { author: 'buildwatch', age: '76d', score: 8, body: 'Also check the requirements. Status can be online while your own PC still misses a required setting.' },
      { author: 'pixelroute', age: '76d', score: 3, body: 'status plus requirements. two tabs, fewer surprises.' },
    ],
  },
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
