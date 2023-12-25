import { type DeepPartial } from "../../partial";
import type EnglishTranslations from "../en/translation";

const Translations: DeepPartial<typeof EnglishTranslations> = {
  reset_backpack: "बैकपैक रीसेट करें",
  create_account: "खाता बनाएँ",
  gm: "शुभ प्रभात",
  already_have_account: "मेरे पास पहले से ही खाता है",
  need_help_hop_discord: "मदद चाहिए? डिस्कोर्ड में चलें",
  claim_username: {
    title: "अपना उपयोगकर्ता नाम दावा करें",
    description:
      "अन्य आपको इस उपयोगकर्ता नाम से देख और खोज सकते हैं, और यह आपके प्राथमिक वॉलेट पते के साथ जुड़ा होगा।",
    subtitle1: "अगर आप गुमनाम रहना चाहते हैं तो बुद्धिमानी से चुनें।",
    subtitle2: "मज़े करें!",
  },
  username: "उपयोगकर्ता नाम",
  continue: "जारी रखें",
  create_new_wallet: "एक नया वॉलेट बनाएं",
  already_have_wallet: "मेरे पास पहले से ही वॉलेट है",
  secret_recovery_phrase: "गुप्त वसूली वाक्यांश",
  only_way_to_recover:
    "अगर आप अपना उपकरण खो देते हैं तो यह आपका खाता वापस पाने का एकमात्र तरीका है। इसे लिखें और इसे सुरक्षित स्थान पर संग्रहित करें।",
  enter_existing_mnemonic:
    "मौजूदा वॉलेट जोड़ने के लिए अपने 12 या 24-शब्द गुप्त वसूली याददाश्त दर्ज करें।",
  saved_recovery_phrase: "मैंने अपने गुप्त वसूली वाक्यांश को सहेजा है",
  import: "आयात करें",
  next: "अगला",
  select_one_or_more_blockchains:
    "एक या अधिक का चयन करें। आप इसे बाद में सेटिंग्स मेनू में बदल सकते हैं।",
  Ethereum: "इथेरियम",
  Solana: "सोलाना",
  Bitcoin: "बिटकॉइन",
  username_recovery: "उपयोगकर्ता नाम की वसूली",
  enter_username_to_recover:
    "नीचे अपना उपयोगकर्ता नाम दर्ज करें, फिर आपसे आपके गुप्त वसूली वाक्यांश के लिए पूछा जाएगा ताकि सत्यापित किया जा सके कि आपके पास जो सार्वजनिक कुंजी शुरुआत में इससे जुड़ी थी, वह है।",
  "Username has already been claimed":
    "उपयोगकर्ता नाम पहले ही दावा किया जा चुका है",
  create_password: "पासवर्ड बनाएँ",
  password: "पासवर्ड",
  atleast_8_characters: "इसमें कम से कम 8 वर्ण होने चाहिए।",
  unlock_backpack: "आपको इसे Backpack अनलॉक करने की आवश्यकता होगी।",
  confirm_password: "पासवर्ड की पुष्टि करें",
  password_too_short: "आपका पासवर्ड कम से कम 8 अक्षरों का होना चाहिए।",
  password_mismatch: "आपके पासवर्ड मेल नहीं खाते।",
  terms_of_service: "सेवा की शर्तें",
  i_agree_to_the: "मैं सहमत हूँ",
  allow_notifications: {
    title: "सूचनाएँ अनुमति दें?",
    subtitle: "ये संदेशों और मित्र अनुरोधों के लिए दिखाई देते हैं।",
  },
  disable: "अक्षम करें",
  allow: "अनुमति दें",
  post_setup: {
    title: "आपने Backpack सेटअप कर लिया है!",
    description:
      "हम शुरुआत करने के लिए कुछ xNFTs डाउनलोड करने की सलाह देते हैं।",
  },
  browse_xnft: "xNFT पुस्तकालय ब्राउज़ करें",
  follow_on_twitter: "ट्विटर पर हमें फॉलो करें",
  join_discord: "डिस्कोर्ड में शामिल हों",
  visit_xnft_gg: "xnft.gg पर जाएं",
  import_existing_wallet: "Import wallet",
  import_existing_wallet_description:
    "अपना वॉलेट आयात करने के लिए एक तरीका चुनें।",
  show_advanced_options: "उन्नत विकल्प दिखाएं",
  hide_advanced_options: "उन्नत विकल्प छुपाएं",
  recover_hardware_wallet: "हार्डवेयर वॉलेट की वसूली",
  recover_from_backpack_backup: "Recover with Backpack Backup",
  have_hardware_wallet: "मेरे पास हार्डवेयर वॉलेट है",
  create_new_wallet_description:
    "वॉलेट प्रकार का चयन करें। अगर आप सुनिश्चित नहीं हैं, तो वसूली वाक्यांश का उपयोग करना सबसे सामान्य विकल्प है।",
  with_secret_key: {
    create: "गुप्त वाक्यांश के साथ बनाएँ",
    import: "गुप्त वाक्यांश के साथ आयात करें",
    recover: "गुप्त वाक्यांश के साथ वसूली करें",
  },
  with_private_key: {
    create: "निजी कुंजी के साथ बनाएँ",
    import: "निजी कुंजी के साथ आयात करें",
    recover: "निजी कुंजी के साथ वसूली करें",
  },
  recover_a_username: {
    title: "उपयोगकर्ता नाम की वसूली",
    description: "अपने उपयोगकर्ता नाम की वसूली के लिए एक तरीका चुनें।",
  },
  enter_private_key: "निजी कुंजी दर्ज करें",
  change_mnemonic: "{{length}}-शब्द वसूली याददाश्त का उपयोग करें",
  unlock: "अनलॉक करें",
  forgot_password: "पासवर्ड भूल गए?",
  buy: "खरीदें",
  receive: "प्राप्त करें",
  send: "भेजें",
  swap: "अदला बदली करें",
  search: "खोजें",
  friends: "दोस्त",
  applications: "एप्लीकेशन्स",
  group_chats: "समूह चैट",
  tokens: "टोकन",
  collectibles: "संग्रहीय वस्त्र",
  wallets: "वॉलेट",
  new_wallet_associate: "आपका नया वॉलेट @{{username}} के साथ जोड़ा जाएगा",
  connection_public_warning:
    "यह कनेक्शन सार्वजनिक होगा, इसलिए यदि आप एक अलग पहचान बनाना पसंद करते हैं, तो एक नया खाता बनाएं।",
  continue_as_username: "@{{username}} के रूप में जारी रखें",
  create_new_account: "नया खाता बनाएं",
  select_network: "नेटवर्क चुनें",
  create_or_import_wallet: "वॉलेट बनाएं या आयात करें",
  add_new_wallet_for_username:
    "बैकपैक पर {{username}} के लिए एक नया वॉलेट जोड़ें।",
  setup_recovery_phrase: "रिकवरी वाक्यांश सेट करें",
  advanced_wallet_import: "उन्नत वॉलेट आयात",
  wallet_created: "वॉलेट बनाया गया",
  backpack_recovery_phrase: "बैकपैक रिकवरी वाक्यांश",
  other_recovery_phrase: "अन्य रिकवरी वाक्यांश",
  private_key: "निजी कुंजी",
  hardware_wallet: "हार्डवेयर वॉलेट",
  import_wallet: "वॉलेट आयात करें",
  import_wallets: "वॉलेट्स आयात करें",
  select_which_wallet: "चुनें कि आप कौन सा वॉलेट आयात करना चाहते हैं।",
  select_which_wallets: "चुनें कि आप कौन से वॉलेट्स आयात करना चाहते हैं।",
  derivation_path: "व्युत्पन्न पथ",
  copied: "प्रतिलिपि बनाई गई!",
  copy: "प्रतिलिपि करें",
  wallet_address: "वॉलेट पता",
  rename_wallet: "वॉलेट का नाम बदलें",
  show_private_key: "निजी कुंजी दिखाएं",
  remove_wallet: "वॉलेट हटाएं",
  app_signing: "एप्लिकेशन हस्ताक्षर",
  detail: "विवरण",
  is_primary: "यह आपका प्राथमिक वॉलेट है",
  set_as_primary: "प्राथमिक रूप से सेट करें",
  some_more_steps_to_recover:
    "इस वॉलेट को पुनर्प्राप्त करने के लिए कुछ और कदम आवश्यक हैं",
  buy_using_link: "लिंक का उपयोग करके खरीदें",
  your_blockchain_address: "आपका {{blockchainDisplay}} पता",
  enter_username_or_address: "उपयोगकर्ता नाम या पता दर्ज करें",
  review: "समीक्षा करें",
  retry: "पुन: प्रयास करें",
  view_explorer: "एक्सप्लोरर देखें",
  view_balances: "संतुलन देखें",
  sending_dots: "भेज रहा है...",
  sending: "भेज रहा है",
  error: "त्रुटि",
  your_addresses: "आपके पते",
  select_wallet: "Select Wallet",
  select_token: "टोकन चुनें",
  address_receive_warning:
    "इस पते पर केवल {{gasTokenName}} और {{appTokenName}} टोकन {{name}} पर प्राप्त किया जा सकता है।",
  deposit: "जमा",
  send_ticker: "{{ticker}} भेजें",
  send_to: "को भेजें",
  to: "को",
  invalid_address: "अमान्य पता",
  insufficient_balance: "अपर्याप्त शेष",
  review_send: "समीक्षा करें",
  you_pay: "आप भुगतान करते हैं",
  rate: "दर",
  estimated_fees: "अनुमानित शुल्क",
  fees: "Fees",
  swap_fees_warning: "उद्धरण में {{pct}}% बैकपैक शुल्क शामिल है",
  price_impact: "मूल्य प्रभाव",
  wrap: "लपेटें",
  unwrap: "उन्व्रैप",
  receiving: "प्राप्त कर रहा है",
  you_receive: "आप प्राप्त करते हैं",
  you_received: "आपने प्राप्त किया",
  swap_symbol: "स्वैप {{symbol}}",
  refresh_quote: "कोट को ताजगी दें",
  approve: "मंजूर",
  swap_confirmed: "स्वैप पुष्टि हुई!",
  swapping: "स्वैप हो रहा है...",
  other_people: "अन्य लोग",
  unfriend: "अमित्र",
  cancel_request: "अनुरोध रद्द करें",
  decline: "मना करें",
  accept: "स्वीकार करें",
  send_request: "अनुरोध भेजें",
  members_count: "{{memberCount}} सदस्य",
  search_username: "उपयोगकर्ता नाम खोजें",
  message_username: "{{username}} को संदेश दें",
  write_a_message: "एक संदेश लिखें...",
  nft_stickers: "एनएफटी स्टिकर्स",
  attach: "अटैच",
  emoji: "इमोजी",
  gif: "जीआईएफ",
  are_friends_message: "आप और @{{username}} आपस में मित्र हैं",
  friend_request_pending: "मित्र अनुरोध लंबित है",
  can_still_interact: "आप अब भी संदेश भेज सकते हैं और बातचीत कर सकते हैं",
  not_your_friend: "यह एक मित्र नहीं है",
  only_add_friends_warning:
    "केवल उन मित्रों को जोड़ें जिन्हें आप जानते हैं और विश्वास करते हैं",
  request_to_add_friend: "मित्र जोड़ने का अनुरोध करें",
  cancel_pending_request: "लंबित अनुरोध रद्द करें",
  message: "संदेश",
  connected: "जुड़ा हुआ",
  beginning_chat_history: "यह आपके चैट इतिहास की शुरुआत है।",
  no_nfts: {
    title: "कोई एनएफटी नहीं",
    subtitle: "अपने पहले एनएफटी के साथ शुरुआत करें",
    buttonText: "Browser Tensor",
  },
  join_chat: "चैट में शामिल हों",
  description: "विवरण",
  attributes: "गुण",
  max: "अधिकतम",
  joining: "जुड़ रहा है",
  joined: "जुड़ गया",
  cancel: "रद्द करें",
  friend_request_accepted: "मित्र अनुरोध स्वीकृत",
  friend_request: "मित्र अनुरोध",
  remove_from_friends: "मित्रों से हटाएं",
  accept_friend_request: "मित्र अनुरोध स्वीकार करें",
  add_to_friends: "मित्रों में जोड़ें",
  blocked: {
    title: "अवरुद्ध",
    subtitle: "@{{remoteUsername}} अब से आपके DMs में दिखाई नहीं देना चाहिए।",
  },
  unblock: "अवरोध हटाएं",
  block: "अवरोधित करें",
  remove_spam: "स्पैम हटाएं",
  mark_as_spam: "स्पैम के रूप में चिह्नित करें",
  burned: "जलाया गया",
  sent: "भेजा गया",
  received: "प्राप्त किया",
  app_interaction: "एप्लिकेशन अन्तर्क्रिया",
  token_swap: "टोकन स्वैप",
  failed: "असफल",
  minted: "मुद्रित",
  add_account: "खाता जोड़ें",
  settings: "सेटिंग्स",
  pop_window: "पॉप विंडो",
  your_account: "आपका खाता",
  preferences: "प्राथमिकताएं",
  lock: "ताला लगाएं",
  about_backpack: "बैकपैक के बारे में",
  discord: "असहमति",
  twitter: "ट्विटर",
  github: "गिटहब",
  website: "वेबसाइट",
  termsOfService: "सेवा की शर्तें",
  backpack: "बैकपैक",
  request: "अनुरोध",
  requests: "अनुरोध",
  contact_requests: {
    title: "इन लोगों ने आपको मित्र के रूप में जोड़ने की इच्छा व्यक्त की।",
    subtitle: "किसी का प्रोफ़ाइल देखने के लिए क्लिक करें।",
  },
  update_username: "Update Username",
  change_password: "पासवर्ड बदलें",
  show_recovery_phrase: "गुप्त पुनः प्राप्ति वाक्यांश दिखाएं",
  remove: "हटाएं",
  enter_password: "पासवर्ड दर्ज करें",
  re_enter_password: "पासवर्ड फिर से दर्ज करें",
  password_no_match: "पासवर्ड और पुष्टिकरण मेल नहीं खाते।",
  password_too_short_warning: "कम से कम {{minPasswordLength}} वर्ण होने चाहिए।",
  password_too_short_warning2:
    "आपका पासवर्ड कम से कम {{minPasswordLength}} वर्ण लंबा होना चाहिए।",
  recovery_warning: {
    warn1: "बैकपैक सहायता कभी भी आपके गुप्त वाक्यांश की मांग नहीं करेगी।",
    warn2:
      "अपने गुप्त वाक्यांश को कभी शेयर न करें या इसे किसी ऐप या वेबसाइट में दर्ज न करें।",
    warn3:
      "आपके गुप्त वाक्यांश के पास होने वाला कोई भी आपके खाते का पूरी तरह से नियंत्रण रखेगा।",
  },
  show_phrase: "वाक्यांश दिखाएं",
  remove_user: {
    title: "उपयोगकर्ता हटाएं",
    subtitle:
      "इससे आपके द्वारा बनाए गए या आयात किए गए सभी वॉलेट्स हटा दिए जाएंगे। सुनिश्चित करें कि आपके पास अपने मौजूदा गुप्त पुनर्प्राप्ति वाक्यांश और निजी कुंजी संरक्षित हैं।",
  },
  reset_backpack_subtitle:
    "इससे आपके द्वारा बनाए गए या आयात किए गए सभी उपयोगकर्ता खाते हटा दिए जाएंगे। सुनिश्चित करें कि आपके पास अपने मौजूदा गुप्त पुनर्प्राप्ति वाक्यांश और निजी कुंजी संरक्षित हैं।",
  no_friends: "कोई दोस्त नहीं",
  no_results_for: "कोई परिणाम नहीं मिला '{{searchFilter}}' के लिए",
  request_users_to_become_Friends:
    "संदेश टैब में उपयोगकर्ताओं से दोस्त बनने का अनुरोध करें",
  auto_lock_timer: "स्वत: ताला टाइमर",
  trusted_sites: "विश्वसनीय साइटें",
  dark_mode: "डार्क मोड",
  developer_mode: "डेवलपर मोड",
  notifications: "सूचनाएं",
  full_screen_avatar: "पूर्ण स्क्रीन अवतार",
  aggregate_wallets: "समग्र वॉलेट्स",
  autolock_title: "मैं निष्क्रिय होने पर बैकपैक को ताला लगाएं",
  never: "कभी नहीं",
  every_time_close_backpack: "हर बार जब मैं बैकपैक बंद करता हूं",
  set: "सेट",
  minutes: "मिनट",
  trustedSites: {
    title: "कोई विश्वसनीय साइटें नहीं",
    subtitle: "विश्वसनीय साइटें यहां सूचीबद्ध होंगी",
  },
  deny: "इनकर करें",
  confirm_uninstall_xnft:
    "{{title}} को अनइंस्टॉल करने के लिए क्या आप निश्चित हैं?",
  burn_token_warning:
    "क्या आप वाकई इस टोकन को जलाना चाहते हैं? यह कार्रवाई पलटाई नहीं जा सकती।",
  network_connection_error: "नेटवर्क कनेक्शन त्रुटि",
  account_marked_spam: "आपने इस खाता को स्पैम के रूप में चिह्नित किया है",
  blocked_account: "आपने इस खाता को ब्लॉक कर दिया है",
  friend_requested: "मित्र का अनुरोध किया",
  spam: "स्पैम",
  marked_user_as_spam: "उपयोगकर्ता को स्पैम के रूप में चिह्नित किया",
  friendship_message1: "अब आप और {{remoteUsername}} जुड़ चुके हैं",
  friendship_message2:
    "हम {{remoteUsername}} को आपके संपर्क करने की इच्छा की सूचना देंगे",
  language: "भाषा",
  update: "अपडेट",
  no_recent_activity: {
    title: "कोई हाल की गतिविधि नहीं",
    subtitle: "अपना पहला xNFT जोड़कर शुरुआत करें",
  },
  activity: "गतिविधि",
  reply: "उत्तर",
  back: "वापस",
  verify: "सत्यापित करें",
  amount: "राशि",
  confirm: "पुष्टि करें",
  reset: "रीसेट करें",
  close: "बंद करें",
  try_again: "फिर से प्रयास करें",
  username_atleast: "उपयोगकर्ता नाम कम से कम 3 वर्ण होने चाहिए",
  username_at_max: "उपयोगकर्ता नाम 15 वर्ण से कम होना चाहिए",
  incorrect_secret_phrase: "अमान्य गुप्त वसूली वाक्यांश",
  setting_up_mnemonic: "मनोनीति सेट कर रहा है...",
  cant_find_recovery_phrase:
    "हम आपके वसूली वाक्यांश का उपयोग करके किसी भी बटुए को नहीं ढूंढ सके।",
  cant_find_recovery_phrase2:
    "हम आपके वसूली वाक्यांश का उपयोग करके सार्वजनिक कुंजी {{publicKey}} को नहीं ढूंढ सके।",
  unable_to_recover: "बटुए को पुनर्प्राप्त करने में असमर्थ",
  go_back_and_try: "वापस जाएं और पुनः प्रयास करें",
  turn_on_biometric_alert:
    "आप हमेशा सेटिंग्स में {{biometricName}} को चालू कर सकते हैं",
  now_now: "अभी नहीं",
  enable_biometric: {
    title: "{{biometricName}} सक्षम करें",
    subtitle:
      "{{biometricName}} का उपयोग आपके उपकरण को खोलने के लिए किया जा सकता है",
  },
  maybe_later: "शायद बाद में",
  something_went_wrong: {
    title: "कुछ गलत हो गया।",
    subtitle: "कृपया तत्काल संपर्क करें या पुनः प्रयास करें",
    subtitle2: "पुनः प्रयास करें",
    buttonText: "फिर से शुरू करें",
    subtitle3: "हम आपके बटुए को हटाने में सक्षम नहीं थे",
  },
  creating_wallet: "आपका बटुआ बना रहा है...",
  finish: "समाप्त करें",
  not_now: "अभी नहीं",
  enter_private_key_description:
    "अपनी निजी कुंजी दर्ज करें। इसे आपके उपकरण पर एन्क्रिप्ट किया जाएगा और संग्रहित किया जाएगा।",
  having_trouble_logging_in: "लॉग इन करने में परेशानी हो रही है",
  login_with_name: "{{biometricName}} के साथ लॉगिन करें",
  accounts_capital: "खाते",
  lock_backpack: "बैकपैक लॉक करें",
  blockchain_connection: "ब्लॉकचेन कनेक्शन",
  change_rpc: "RPC कनेक्शन बदलें",
  blockchain_commitment: "ब्लॉकचेन प्रतिबद्धता",
  blockchain_explorer: "ब्लॉकचेन एक्सप्लोरर",
  import_private_key: "निजी कुंजी आयात करें",
  edit_wallets: "बटुए संपादित करें",
  advanced_import: "उन्नत आयात",
  recovery_phrase: "वसूली वाक्यांश",
  enter_wallet_name: "बटुए का नाम दर्ज करें",
  incorrect_url: "गलत URL",
  chain_id: "चेन ID",
  rpc_connection: "RPC कनेक्शन",
  confirmation_commitment: "पुष्टिकरण प्रतिबद्धता",
  explorer: "खोजक",
  error_locking_wallet: "बटुए को लॉक करने में त्रुटि",
  must_enter_password: "आपको पासवर्ड दर्ज करना होगा",
  review_order: "ऑर्डर समीक्षा करें",
  select_item: "{{item}} चुनें",
  from: "से",
  recent_activity: "हाल की गतिविधि",
  network: "नेटवर्क",
  network_fee: "नेटवर्क शुल्क",
  speed: "गति",
  send_to_your_wallet: "अपने बटुए में भेजें",
  send_to_other_wallet: "{{label}} को भेजें",
  reset_backpack_warning: {
    title: "क्या आप सुनिश्चित हैं?",
    subtitle: "यह ऐप में संग्रहित सभी डेटा को मिटा देगा",
  },
  yes: "हां",
  no: "नहीं",
  resetting_backpack: "बैकपैक रीसेट कर रहा है...",
  max_base_fee: "अधिकतम आधार शुल्क",
  priority_fee: "प्राथमिकता शुल्क",
  gas_limit: "गैस सीमा",
  nonce: "नॉन्स",
  max_transaction_fee: "अधिकतम लेन-देन शुल्क",
  advance_settings: "उन्नत सेटिंग्स",
  save: "सहेजें",
  could_not_add: "जोड़ नहीं सका",
  recover: "पुनर्प्राप्त करें",
  people_you_may_know: {
    one: "1 व्यक्ति जिसे आप जानते हो सकते हैं",
    multiple: "{{requestCount}} लोग जिन्हें आप जानते हो सकते हैं",
  },
  message_requests: "संदेश अनुरोध",
  mnemonic_warning1: "मनोनीति 12 या 24 शब्दों की होनी चाहिए",
  browser_xnft_library: "हमारे xNFT लाइब्रेरी को ब्राउज़ करें",
  listed_on_marketplace: "{{marketplace}} पर सूचीबद्ध",
  sold_on_marketplace: "{{marketplace}} पर बिक गया",
  load_screen: "स्क्रीन लोड करें",
  your_friends: "आपके दोस्त",
  search_results: "खोज परिणाम",
  invalid_swap: "अवैध अदला-बदली",
  recovery_phrase_message1:
    "हम आपका पासवर्ड पुनर्प्राप्त नहीं कर सकते क्योंकि यह केवल आपके कंप्यूटर पर संग्रहीत होता है। आप अधिक पासवर्ड की कोशिश कर सकते हैं या गुप्त वसूली वाक्यांश के साथ अपना बटुआ रीसेट कर सकते हैं।",
  try_more_passwords: "अधिक पासवर्ड की कोशिश करें",
  recovery_phrase_subtitle1:
    "अपने बटुए को पुनर्प्राप्त करने के लिए इन {{length}} शब्दों का उपयोग करें",
  logout: "लॉगआउट",
  account: "खाता",
  authenticated_apps: "प्रमाणित एप्स",
  no_results: "कोई परिणाम नहीं",
  add_to_see_friends: "उन्हें यहां देखने के लिए कुछ दोस्तों को जोड़ें।",
  primary: "प्राथमिक",
  wallet: "Wallet",
  wallet_name: "बटुए का नाम",
  success: "सफलता",
  public_key_imported_successfully: "सार्वजनिक कुंजी सफलतापूर्वक आयात की गई",
  im_done: "मैंने हो गया",
  add_more: "और जोड़ें",
  keystore_not_found_warning:
    "नहीं मिला। आपके कीस्टोर के साथ कुछ गलत हो गया होगा। कृपया ऐप को रीसेट करें और पुनः प्रयास करें।",
  no_notifications: {
    title: "कोई सूचनाएं नहीं",
    subtitle: "कुछ दोस्त बनाएं!",
  },
  gas_token_warning:
    "इस पते पर केवल {{GasTokenName}} और {{AppTokenName}} टोकन {{Name}} पर प्राप्त हो सकते हैं।",
  removing_wallet: "बटुआ हटा रहा है...",
  all_done: {
    title: "सब हो गया",
    subtitle: "आपका बटुआ Backpack से हटा दिया गया है।",
  },
  go_back: "वापस जाएं",
  removal_warning: {
    title: "क्या आप वाकई {{address}} को हटाना चाहते हैं?",
    subtitle1:
      "Backpack से हटाने से बटुए की सामग्री हटाई नहीं जाएगी। यह नए Backpack में अपने गुप्त वसूली वाक्यांश को आयात करके उपलब्ध होगा।",
    subtitle2:
      "Backpack से हटाने से बटुए की सामग्री हटाई नहीं जाएगी। यह अपने लेजर को जोड़कर उपलब्ध होगा।",
    subtitle3:
      "Backpack से हटाने से आपके उपयोगकर्ता नाम और इस सार्वजनिक कुंजी के बीच का संबंध हटा दिया जाएगा। आप हमेशा इसे बाद में जोड़ सकते हैं जब आप बटुए को Backpack में जोड़ते हैं।",
    subtitle4:
      "Backpack से हटाने से बटुए की कुंजी युगल हटा दी जाएगी। हटाने से पहले सुनिश्चित करें कि आपने निजी कुंजी को निर्यात किया है और सहेजा है।",
  },
  balance_update: "आपका बैलेंस शीघ्र ही अपडेट होना चाहिए",
  all_time_high: "सभी समय का उच्चतम",
  circulating_supply: "संचालित आपूर्ति",
  holdings: "धारण",
  token_not_found: "टोकन नहीं मिला",
  favorites: "पसंदीदा",
  prices: "Prices",
  try_different_option: "एक अलग विकल्प का प्रयास करें",
  no_password_exists: "कोई पासवर्ड मौजूद नहीं है। रीसेट करें",
  biometric_failed: "बायोमेट्रिक विफल रहा। पासवर्ड आजमाएं?",
  incorrect_password: "गलत पासवर्ड",
  current: "वर्तमान",
  new: "नया",
  password_must_be_different: "आपका नया पासवर्ड अलग होना चाहिए",
  new_wallet_created: "नया वॉलेट बनाया गया",
  loading_dots: "लोड हो रहा है...",
  balances: "संतुलन",
  my_wallet: "मेरा बटुआ",
  paste_from_clipboard: "क्लिपबोर्ड से पेस्ट करें",
  copied_to_clipboard: "क्लिपबोर्ड पर कॉपी किया गया",
  imported_capital: "आयातित",
  hardware_capital: "हार्डवेयर",
  add_or_connect_wallet: "बटुआ जोड़ें / कनेक्ट करें",
  copy_address: "पता कॉपी करें",
  recover_a_wallet: "एक बटुआ को पुनः प्राप्त करें",
  recover_a_wallet_using_following:
    "निम्नलिखित में से एक का उपयोग करके एक बटुआ को पुनः प्राप्त करें:",
  private_key_warning: "अपनी निजी कुंजी कभी न दें",
  messages: "संदेश",
};
export default Translations;
