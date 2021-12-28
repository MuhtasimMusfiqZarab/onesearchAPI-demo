const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class initialSchema1640682115560 {
    name = 'initialSchema1640682115560'

    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `google` (`id` varchar(36) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `createdBy` varchar(36) NULL, `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `updatedBy` varchar(36) NULL, `query_parameter` varchar(255) NULL, `company` varchar(255) NULL, `rating` float NULL, `category` varchar(255) NULL, `address` varchar(255) NULL, `phone` varchar(255) NULL, `website` varchar(255) NULL, `street` varchar(255) NULL, `city` varchar(255) NULL, `postcode` varchar(255) NULL, `country` varchar(255) NULL, `claim_status` varchar(255) NULL, `total_reviews` varchar(255) NULL, `review_data` json NULL, `gmaps_url` varchar(255) NULL, `timestamp` date NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `linkedin` (`id` varchar(36) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `createdBy` varchar(36) NULL, `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `updatedBy` varchar(36) NULL, `refId` varchar(255) NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `subscription` (`id` varchar(36) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `createdBy` varchar(36) NULL, `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `updatedBy` varchar(36) NULL, `title` varchar(255) NOT NULL, `price` double NOT NULL, `totalTimestamp` bigint NOT NULL, `totalCoins` int NOT NULL, `discountPercentage` int NULL, `benefits` json NOT NULL, UNIQUE INDEX `unique_id` (`id`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(36) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `createdBy` varchar(36) NULL, `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `updatedBy` varchar(36) NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `avatarLink` varchar(255) NULL, `token` varchar(255) NULL, `authProvider` varchar(255) NULL, `isActive` tinyint NOT NULL DEFAULT 1, `accessRole` enum ('demo', 'pro', 'admin', 'developer', 'support') NOT NULL DEFAULT 'demo', `language` varchar(10) NOT NULL DEFAULT 'en', UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `youtube` (`id` varchar(36) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `createdBy` varchar(36) NULL, `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `updatedBy` varchar(36) NULL, `socialblade_category` varchar(255) NULL, `channel_url` varchar(100) NOT NULL, `bio_email` varchar(255) NULL, `subscribers` bigint NULL, `location` varchar(255) NULL, `channel_name` varchar(255) NULL, `timestamp` date NULL, `description` varchar(255) NULL, `instagram` varchar(255) NULL, `twitter` varchar(255) NULL, `facebook` varchar(255) NULL, `tiktok` varchar(255) NULL, `pinterest` varchar(255) NULL, `others` varchar(255) NULL, `joined` varchar(255) NULL, `views` varchar(255) NULL, `socialblade_similar_scraped` tinyint(1) NULL, PRIMARY KEY (`id`, `channel_url`)) ENGINE=InnoDB");
    }

    async down(queryRunner) {
        await queryRunner.query("DROP TABLE `youtube`");
        await queryRunner.query("DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP INDEX `unique_id` ON `subscription`");
        await queryRunner.query("DROP TABLE `subscription`");
        await queryRunner.query("DROP TABLE `linkedin`");
        await queryRunner.query("DROP TABLE `google`");
    }
}
